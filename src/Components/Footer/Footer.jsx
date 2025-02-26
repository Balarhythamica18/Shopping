import React, { useState } from 'react';
import './Footer.css';
import logo from '../../assets/Logo.png';
import fb from '../../assets/fb.jpg';
import insta from '../../assets/insta.jpg';
import whatsapp from '../../assets/whatsapp.jpg';
import About from './Footer-links/About/About';
import Product from './Footer-links/Products/Product';
import Contact from './Footer-links/Contact/Contact';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);
  const [isProductModalOpen, setProductModalOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const companyInfo = {
    name: 'BE Bakers',
    address: '123 Bakery Lane, Sweet City, Foodland',
    founder: 'John Dough',
    manager: 'Jane Pastry',
  };



  const handleOpenAbout = () => {
    setAboutModalOpen(true);
  };

  const handleCloseAbout = () => {
    setAboutModalOpen(false);
  };

  const handleOpenProducts = () => {
    setProductModalOpen(true);
  };

  const handleCloseProducts = () => {
    setProductModalOpen(false);
  };

  const handleOpenContact = () => {
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setContactModalOpen(false);
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="BE Bakers Logo" />
        <p>BE Bakers</p>
      </div>
      <ul className="footer-links">
        <li>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Home
          </Link>
        </li>
        <li onClick={handleOpenProducts}>Products</li>
        <li onClick={handleOpenAbout}>About</li>
        <li onClick={handleOpenContact}>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={fb} alt="Facebook" />
        </div>
        <div className="footer-icons-container">
          <img src={insta} alt="Instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp} alt="WhatsApp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Rights Reserved</p>
      </div>

      {/* Modals */}
      <About isOpen={isAboutModalOpen} onClose={handleCloseAbout} companyInfo={companyInfo} />

      <Product isOpen={isProductModalOpen} onClose={handleCloseProducts} />
      <Contact isOpen={isContactModalOpen} onClose={handleCloseContact} />
    </div>
  );
};

export default Footer;
