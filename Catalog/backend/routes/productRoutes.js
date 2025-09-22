const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const upload = require("../middleware/upload");
const auth = require("../middleware/auth"); // ✅ add this


// ✅ POST /api/products/add
router.post("/add", auth, upload, async (req, res) => {
  console.log("POST /add route hit");
  console.log("Request body:", req.body);
  console.log("Request file:", req.file);

  try {
    const { name, disc, category } = req.body;   // ✅ use disc instead of price
    const image = req.file ? req.file.filename : null;

    if (!name || !disc || !category || !image) {
      console.log("Missing fields:", { name, disc, category, image });
      return res.status(400).json({ error: "All fields are required" });
    }

    const newProduct = new Product({
      name,
      disc,
      category,
      image,
    });

    await newProduct.save();

    console.log("Product saved successfully:", newProduct);
    res.json({ message: "✅ Product added successfully", product: newProduct });
  } catch (err) {
    console.error("Error in /add route:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET /api/products (for frontend to fetch)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
