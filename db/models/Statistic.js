import mongoose from "mongoose";

const { Schema } = mongoose;

const statisticsSchema = new Schema({
  amount: { type: Number, required: true },
});

const Statistic =
  mongoose.models.Statistic || mongoose.model("Statistic", statisticsSchema);

export default Statistic;
