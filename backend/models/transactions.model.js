import { Schema } from "mongoose";
import mongoose from "mongoose";

const transactionsSchema = new Schema({
  desc: {
    type: String,
    required: true,
  },
  cat: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Transactions", transactionsSchema);
