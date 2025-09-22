import React, { useState } from 'react';
import '../styles/About.css';
import Range from '../Range';
import Contact from '../pages/Contact';

const About = () => {
  const [showFullMission, setShowFullMission] = useState(false);
  const [showFullWho, setShowFullWho] = useState(false);
  const [showFullTerms, setShowFullTerms] = useState(false);

  return (
    <div className="about-page">
      <div className="about-content">

        <div className="about-card">
          <h2>Our Mission</h2>
          <p className={`about-text ${showFullMission ? 'expanded' : 'collapsed'}`}>
            At Alphora, our mission is to enhance patient care and mobility by providing innovative, reliable, and high-quality medical equipment and orthopedic solutions.
            We are committed to empowering healthcare providers and patients with advanced diagnostic devices, surgical essentials, and rehabilitation aids that prioritize safety,
            comfort, and durability. Through continuous innovation, rigorous quality standards, and customer-focused service, we strive to improve healthcare outcomes,
            promote patient independence, and make advanced medical technology accessible to all.
          </p>
          <button className="toggle-button" onClick={() => setShowFullMission(!showFullMission)}>
            {showFullMission ? 'Read Less' : 'Read More'}
          </button>
        </div>

        <div className="about-card">
          <h2>Who We Are</h2>
          <p className={`about-text ${showFullWho ? 'expanded' : 'collapsed'}`}>
            Established with a vision of transforming healthcare support, Alphora specializes in a wide range of solutions – from surgical essentials, diagnostic devices, thermometers, and BP monitors
            to walkers, orthotics, and wheelchairs. Our products are built for durability, comfort, and ease of use, designed to meet the evolving needs of patients and healthcare providers.
            With a dedicated team of experts, we focus on delivering innovative solutions that promote wellness and independence, ensuring that healthcare is efficient, safe, and accessible to all.
          </p>
          <button className="toggle-button" onClick={() => setShowFullWho(!showFullWho)}>
            {showFullWho ? 'Read Less' : 'Read More'}
          </button>
        </div>

        <div className="about-card">
          <h2>Our Terms</h2>
          <p className={`terms-content ${showFullTerms ? 'expanded' : 'collapsed'}`}>
            All product prices listed are exclusive of GST. Applicable Goods and Services Tax (GST) will be added at the time of billing, as per government norms. Products will be dispatched within 2–5 working days of confirmed payment. Delivery time may vary based on location. Shipping charges, if any, will be communicated during the order process. No product will be replaced or returned once sold, except in cases of manufacturing defects, which must be reported within 24 hours of delivery.
          </p>
          <button className="toggle-button" onClick={() => setShowFullTerms(!showFullTerms)}>
            {showFullTerms ? 'Read Less' : 'Read More'}
          </button>
        </div>

        <div className="about-card">
          <Range />
        </div>

      </div>

      <Contact />
    </div>
  );
};

export default About;
