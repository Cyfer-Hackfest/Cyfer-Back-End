import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String },
  author: { type: String },
  content: { type: String },
  fee: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("Work", workSchema);
