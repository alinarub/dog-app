import connect from "@/db/connect";
import Favorite from "@/db/models/Favorite";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    try {
      const favorite = await Favorite.find();
      response.status(200).json(favorite);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
