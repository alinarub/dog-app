import connect from "@/db/connect";
import Favorite from "@/db/models/Favorite";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    console.log("request body", request.body);
    try {
      const favorite = await Favorite.find();
      response.status(200).json(favorite);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
  // Add the winner of the quiz to the Database
  if (request.method === "POST") {
    try {
      const favoriteData = request.body;

      const existingEntry = await Favorite.findOne({ name: favoriteData.name });
      // The dog exists already
      if (existingEntry) {
        const updatedEntryValue = existingEntry.value + favoriteData.value;
        existingEntry.value = updatedEntryValue;
        // Save to Database
        await existingEntry.save();
        return response.status(200).json({
          message: "Entry updated",
          entry: existingEntry,
        });
      }
      // The dog is not listed in the database yet
      else {
        const newEntry = new Favorite({
          name: favoriteData.name,
          value: favoriteData.value,
        });
        await newEntry.save();
        return response
          .status(201)
          .json({ message: "New entry created", entry: newEntry });
      }
      // our old approac
      // await Favorite.create(favoriteData);
      // response.status(201).json({ message: "Favorite created." });
    } catch (error) {
      return response.json({ message: "Something went wrong", error: error });
    }
  }
}
