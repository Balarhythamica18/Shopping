import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/Logo.png'

const Product = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose(); // Close modal when a link is clicked
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
       
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="heading">
        <img className="about-logo" src={Logo} />

        <h1 className="product-heading">Explore Our Delicious Offerings</h1>
        </div>
        <div className="product-sections">
          {/* Cakes Section */}
          <div className="product-column">
            <h3>Cakes</h3>
            <p>
              Indulge in our heavenly cakes, freshly baked to perfection. Whether it's a birthday, wedding, or just a sweet craving, we have the perfect cake for every occasion.
            </p>
            <Link to="/Cakes" onClick={handleLinkClick} className="product-link">
              View Cakes
            </Link>
          </div>

          {/* Juices Section */}
          <div className="product-column">
            <h3>Juices</h3>
            <p>
              Refresh yourself with our natural, freshly squeezed juices. From tangy citrus to exotic blends, our juice menu is crafted to quench your thirst.
            </p>
            <Link to="/Juice" onClick={handleLinkClick}className="product-link">
              View Juices
            </Link>
          </div>

          {/* Chats Section */}
          <div className="product-column">
            <h3>Snacks</h3>
            <p>
              Satisfy your savory cravings with our spicy and tangy Indian snacks. Each bite is a burst of flavor, made with love and authentic spices.
            </p>
            <Link to="/Snacks" onClick={handleLinkClick}className="product-link">
              View Snacks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
