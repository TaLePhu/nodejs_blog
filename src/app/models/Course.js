import mongoose from "mongoose";

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    name: { type: String, default: 'hahaha' },
    title: { type: String },
    image: { type: String }
  },
  { timestamps: true } // Tự động tạo `createdAt` và `updatedAt`
);

export default mongoose.model('Course', courseSchema);
