import mongoose from "mongoose";

const { Schema } = mongoose;

const favoritesSchema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
});

const Favorite =
  mongoose.models.Favorite || mongoose.model("Favorite", favoritesSchema);

export default Favorite;
