import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ check role from localStorage
  const role = localStorage.getItem("role"); 

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? "responsive" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          <img src="/images/logohome.png" alt="Alphora Logo" className="logo" />
        </NavLink>

        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle navigation menu"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>

          <NavLink to="/products" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
            Products
          </NavLink>

          {/* ✅ only show Admin if role is admin */}
          {role === "admin" && (
            <NavLink to="/admin" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
              Admin
            </NavLink>
          )}

          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
            Contact Us
          </NavLink>
        </div>
      </nav>

      {/* Overlay for background blur */}
      <div className={`overlay ${isMenuOpen ? "show" : ""}`} onClick={closeMenu}></div>
    </>
  );
};

export default Navbar;
