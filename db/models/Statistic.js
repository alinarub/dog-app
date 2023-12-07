import mongoose from "mongoose";

const { Schema } = mongoose;

const statisticsSchema = new Schema({
  barking: { type: Number, required: true },
  energy: { type: Number, required: true },
  good_with_children: { type: Number, required: true },
  good_with_other_dogs: { type: Number, required: true },
  protectiveness: { type: Number, required: true },
  shedding: { type: Number, required: true },
  trainability: { type: Number, required: true },
});

const Statistic =
  mongoose.models.Statistic || mongoose.model("Statistic", statisticsSchema);

export default Statistic;
