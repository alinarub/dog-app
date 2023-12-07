import connect from "@/db/connect";
import Statistic from "@/db/models/Statistic";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    try {
      const statistic = await Statistic.find();
      response.status(200).json(statistic);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  if (request.method === "PUT") {
    try {
      // Diego's approach
      // const statistic = await Statistic.findOneAndUpdate(
      //   { _id: request.query.id },
      //   request.body,
      //   { new: true }
      // );

      // Gregor's approach
      const statistic = await Statistic.findOne({});
      statistic.amount = Number(statistic.amount + 1);
      await statistic.save();
      console.log("statistic data from backend---", statistic);
      response.status(200).json(statistic);
    } catch (error) {
      console.log("PUT /api/services/:id", error);
      response.status(500).json({ message: "Error updating service" });
    }
    return;
  }

  if (request.method === "POST") {
    try {
      const statisticData = request.body;
      await Statistic.create(statisticData);
      response.status(201).json({ message: "Expense created." });
    } catch (error) {
      return response.json({ message: "Something went wrong", error: error });
    }
  }
}
