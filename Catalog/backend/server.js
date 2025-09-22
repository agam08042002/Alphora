const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");          // your MongoDB connection
const productRoutes = require("./routes/productRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve uploaded images

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

// Connect DB
connectDB();

// Routes
app.use("/api/products", productRoutes);   // <-- IMPORTANT

// Test route
app.get("/", (req, res) => res.send("API running..."));
app.use("/api/contact", contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
