import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Product.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [activeCard, setActiveCard] = useState(null); // ✅ Track which card is active

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {});

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id); // ✅ toggle active card
  };

  return (
    <div className="products">
<h2 className="show">Our Products</h2>
      {Object.keys(groupedProducts).map((category) => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          <div className="product-grid">
            {groupedProducts[category].map((p) => (
              <div
                className={`card ${activeCard === p._id ? "active" : ""}`}
                key={p._id}
                onClick={() => handleCardClick(p._id)}
              >
                {p.image && (
                  <img
                    src={`http://localhost:5000/uploads/${p.image}`}
                    alt={p.name}
                  />
                )}
                <h4>{p.name}</h4>
                <p className="description">{p.disc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
