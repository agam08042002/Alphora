import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Admin from "./components/pages/Admin";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Contact from "./components/pages/Contact";

function App() {
  // ✅ Check role from localStorage
  const role = localStorage.getItem("role");

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ Protect admin route */}
          <Route
            path="/admin"
            element={role === "admin" ? <Admin /> : <Navigate to="/" />}
          />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
