const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    disc: { type: String, required: true },
    image: { type: String, required: true },
    category: {
      type: String,
      enum: ["Orthopedic", "Electric", "Sanitation", "Gloves"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
