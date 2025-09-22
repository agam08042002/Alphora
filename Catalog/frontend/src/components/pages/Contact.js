import React, { useState } from "react";
import "../styles/Contact.css"; 
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6"; // ✅ import icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send: " + data.message);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          We'd love to hear from you! Fill out the form below and we'll get back
          to you soon.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? <span className="loader"></span> : "Send Message"}
          </button>
        </form>

        {status && <p className="status-message">{status}</p>}
      </div>

      {/* ✅ Feedback + Icons Section */}
      <div className="feedback-container">
        <h2>Have Feedback or a Query?</h2>
        <p>
          We'd love to hear from you!  
          Reach us anytime via email or connect with us directly:
        </p>

        <div className="feedback-icons">
          <a
            href="https://wa.me/8295490098"
            target="_blank"
            rel="noopener noreferrer"
            className="icon whatsapp"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/alphora-surgicals-26a104386/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin"
          >
            <FaLinkedinIn /> LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
