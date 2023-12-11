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
      const statistic = await Statistic.findOne({});
      statistic.amount = Number(statistic.amount + 1);
      await statistic.save();
      response.status(200).json(statistic);
    } catch (error) {
      response.status(500).json({ message: "Error updating service" });
    }
    return;
  }

  if (request.method === "POST") {
    try {
      const statisticData = request.body;
      await Statistic.create(statisticData.params);
      response.status(201).json({ message: "Statistic created." });
    } catch (error) {
      return response.json({ message: "Something went wrong", error: error });
    }
  }
}
