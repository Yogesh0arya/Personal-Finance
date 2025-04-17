import { Schema } from "mongoose";
import mongoose from "mongoose";

const budgetSchema = new Schema({
  month: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Budget", budgetSchema);
