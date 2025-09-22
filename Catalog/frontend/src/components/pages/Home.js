import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Range from "../Range";
import Product from "../pages/Products";
import "../styles/Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence, color } from "framer-motion";

// ✅ Featured products list
const featuredProducts = [
  { name: "Surgical Mask", price: "₹50", image: "/images/mask.jpg" },
  { name: "Hand Gloves", price: "₹100", image: "/images/gloves.png" },
  { name: "Walker", price: "₹1000", image: "/images/walker.jpg" },
  { name: "Commode Chair", price: "₹2000", image: "/images/commode.jpg" },
  { name: "Wheelchair", price: "₹5000", image: "/images/wheelchair.jpg" },
];

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(true);


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const sliderProducts = [
    { name: "Digital Thermometer", price: "₹150", image: "/images/thermometer.png" },
    { name: "Heating Pad", price: "₹1200", image: "/images/Hot.jpg" },
    { name: "BP Monitor", price: "₹1600", image: "/images/bp.png" },
    { name: "Baby Wipes", price: "₹250", image: "/images/wipes.jpg" },
    { name: "Walking Stick", price: "₹400", image: "/images/stick1.png" },
  ];

  // ✅ Video + Text slides
 const slides = [
  {
    video: "images/wheelchair.mp4",
    title: "Wheelchair",
    desc: [
      "Alphora's wheelchair offers exceptional comfort and mobility for daily use, combining sturdy design with easy portability.",
     
    ],
  },
  {
    video: "images/chair.mp4",
    title: "Commode Chairs",
    desc: [
      "Alphora’s commode chairs are designed for convenience, hygiene, and comfort, suitable for both home and travel.",
      
    ],
  },
  {
    video: "images/stick.mp4",
    title: "Walking Stick",
    desc: [
      "Alphora’s walking sticks provide essential support with ergonomic comfort, ensuring safety and stability in everyday use.",
      
    ],
  },
  {
    video: "images/walker.mp4",
    title: "Folding Walker",
    desc: [
      "Alphora’s folding walker is crafted for ease of use, combining lightweight construction with durable support for mobility-challenged users.",
     
    ],
  },
];

  

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };
  

  return (
    <>
    
            <div className="home">

<div className="hero-section">
  <video autoPlay muted loop className="background-video">
    <source src="/bg2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="hero-overlay">
    <img src="/images/logo2.png" alt="Alphora Logo" className="logo2" />
    <p className="tagline">Trusted quality powering medical excellence</p>
 <h1 className="hero-title">
        <span className="trusted">Trusted</span>{" "}
        <span className="typewriter-wrapper">
          <TypeAnimation
            sequence={[
              "Surgical Products", 2000,
              "Ortho Solutions", 2000,
              "Wellness Products", 2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </span>
      </h1>
        <div className="hero-buttons">
      <a
        href="/Catalog.pdf"
        download="Alphora-Product-Catalog.pdf"
        className="btn-secondary"
      >
        Download Product Catalog
      </a>
    </div>
    
  </div>
</div>

        {/* Hero Section with Video Background */}
      
        {/* Our Range Section */}
        <div className="Range">        <Range/>
</div>

        {/* ✅ Product Section with sliding videos */}
<div className="product-section">
  <div className="product-media">
    <AnimatePresence mode="wait">
      <motion.video
        key={currentIndex}
        src={slides[currentIndex].video}
        autoPlay
        loop
        muted
        playsInline
        className="wheelchair-video"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </AnimatePresence>
  </div>

  <div className="product-info">
    <h2 className="product-title">{slides[currentIndex].title}</h2>

    <div className="product-desc">
      <p>{slides[currentIndex].desc[0]}</p> {/* Intro paragraph */}
      <ul>
        {slides[currentIndex].desc.slice(1).map((point, index) => (
          <li key={index}>{point}</li>  /* Bullet points */
        ))}
      </ul>
    </div>

    <button className="view-btn" onClick={handleNextSlide}>
      See More
    </button>
  </div>
</div>


 <section className="mission-section">
            <h2 className="mission-title">Our Mission</h2>
            <div className="mission-box">
              <p>
                Alphora offers a reliable and innovative range of medical equipment and orthopedic products designed to enhance patient care and mobility. From diagnostic devices and surgical essentials to walkers, sticks, and rehabilitation aids, our solutions combine safety, comfort, and durability.
              </p>
              <button onClick={() => navigate("/about")} className="btn-learn">
                Learn More
              </button>
            </div>
          </section>
        {/* Featured Products with Mission */}
        <section className="featured">
         
  <h2 className="featured">Featured Products</h2>

        {/* Featured Products Slider */}
<section className="featured-products-section">

  <div className="slider-container">
    <Slider {...sliderSettings}>
      {sliderProducts.map((product, index) => (
        <div key={index} className="product-card">
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.name} className="product-image" />
          </div>
          <div className="product-details">
            <h3 className="product-name">{product.name}</h3>
          </div>
        </div>
      ))}
    </Slider>
  </div>

  <button onClick={() => navigate("/products")} className="btn-view-all">
    View All Products
  </button>
</section>

        </section>

        {/* Why Us Section */}
      <section className="why-us">
  <h2 className="why-title">Why Choose Alphora?</h2>
  <div className="why-grid">
    <div className="why-item">
      <img src="/images/quality.png" alt="Quality" />
      <h4>Trusted Quality</h4>
      <p>All products are tested for durability and safety.</p>
    </div>
    <div className="why-item">
      <img src="/images/affordable.png" alt="Affordable" />
      <h4>Affordable Prices</h4>
      <p>Competitive pricing without compromising quality.</p>
    </div>
    <div className="why-item">
      <img src="/images/range.png" alt="Range" />
      <h4>Wide Range</h4>
      <p>From surgical tools to mobility aids – we cover it all.</p>
    </div>
    <div className="why-item">
      <img src="/images/delivery.png" alt="Delivery" />
      <h4>Fast Delivery</h4>
      <p>Quick and reliable nationwide shipping.</p>
    </div>
  </div>
</section>


        {/* Images related to Mission or Brand */}
        <div className="brand-images">
          <img src="/images/Doc1.jpg" alt="Doctor with Medical Products" className="mission-image" />
        </div>

        {/* Terms & Conditions */}
       
      </div>

      {/* Contact Section */}
    <div className="feedback-container">
      <h2>Have Feedback or a Query?</h2>
      <p>
        We'd love to hear from you!  
        For any questions or to share your experience, reach us at:
        <br />
        <strong>alphorasurgicals@gmail.com</strong>
      </p>
      <button className="feedback-button" onClick={() => navigate('/contact')}>
        Contact Us
      </button>
    </div>
    </>
  );
};

export default Home;
