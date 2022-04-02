import mongoose from "mongoose";

const category = new mongoose.Schema({});

export const Category = mongoose.model("Category", category);
