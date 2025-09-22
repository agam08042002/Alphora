import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [name, setName] = useState("");
  const [disc, setDisc] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !disc || !image || !category) {
      return alert("All fields are required!");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("disc", disc); // ✅ match schema
    formData.append("image", image);
    formData.append("category", category);

    try {
      setLoading(true);

      // ✅ Get token from localStorage (after login)
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/products/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // ✅ Send token
          },
        }
      );

      alert(`✅ Product Added: ${res.data.product.name}`);
      setName("");
      setDisc("");
      setImage(null);
      setCategory("");
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert("❌ Error: " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2>Admin - Add Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div style={{ marginBottom: "10px" }}>
          <label>Product Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        {/* Description */}
        <div style={{ marginBottom: "10px" }}>
          <label>Description:</label>
          <textarea
            value={disc}
            onChange={(e) => setDisc(e.target.value)}
            rows="3"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        {/* Category */}
        <div style={{ marginBottom: "10px" }}>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="">-- Select Category --</option>
            <option value="Orthopedic">Orthopedic</option>
            <option value="Electric">Electric</option>
            <option value="Sanitation">Sanitation</option>
            <option value="Gloves">Gloves</option>
          </select>
        </div>

        {/* Image */}
        <div style={{ marginBottom: "10px" }}>
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            style={{ width: "100%" }}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default Admin;
