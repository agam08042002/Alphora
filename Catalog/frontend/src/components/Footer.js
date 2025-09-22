import React from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>Alphora Healthcare</h2>
          <p>
            Providing innovative and reliable surgical and medical solutions
            to enhance patient care and comfort.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:alphorasurgicals@gmail.com">
              alphorasurgicals@gmail.com
            </a>
          </p>
          <Link to="/contact" className="contact-btn">
            Contact Us
          </Link>
        </div>

        <div className="footer-social">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a
            href="https://www.linkedin.com/in/alphora-surgicals-26a104386/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/8295490098"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Alphora | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
