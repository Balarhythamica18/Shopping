import React from 'react';
import './Contact.css';
import fb from '../../../../assets/fb.jpg';
import insta from '../../../../assets/insta.jpg';
import whatsapp from '../../../../assets/whatsapp.jpg';
import Logo from '../../../../assets/Logo.png'

const Contact = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img className="about-logo" src={Logo}/>
        <div className="contact-header">

          <h1>Contact Us</h1>
          <p>We're here to assist you with all your bakery needs!</p>
        </div>
        <hr/>
        <div className="contact-info">
          <h2>Reach Us At</h2>
          <p><strong>Address:</strong> 123 Bakery Lane, Sweet City, Foodland</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> info@bebakers.com</p>
          <p><strong>Working Hours:</strong> Mon-Sun: 8:00 AM - 8:00 PM</p>
        </div>
        <hr />
        <div className="contact-social">
          <h2>Follow Us</h2>
           <div className="footer-social">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
