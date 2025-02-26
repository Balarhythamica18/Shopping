import React from 'react';
import './About.css';
import Logo from '../../../../assets/Logo.png';
import Founder1 from '../../../../assets/Founder_1.jpg'; // Placeholder for first founder photo
import Founder2 from '../../../../assets/Founder_2.jpg'; // Placeholder for second founder photo
import Founder3 from '../../../../assets/Founder_3.jpg'; // Placeholder for third founder photo

const About = ({ isOpen, onClose, companyInfo }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="company-header">
          <img className="about-logo" src={Logo} alt="BE Bakers Logo" />
          <h1>Welcome to {companyInfo.name}</h1>
          <p>Your trusted partner for cakes, juice, and snacks!</p>
        </div>
        <div className="company-content">
          <section className="company-overview animated-box">
            <h2>About Us</h2>
            <p>
              At <strong>{companyInfo.name}</strong>, we specialize in crafting irresistible cakes, refreshing juices, and delectable snacks that make every occasion memorable. Started in 2010 by three passionate Bachelor of Engineering students, our journey is rooted in innovation, dedication, and a love for bringing people together over great food.
            </p>
          </section>

          <section className="company-mission-vision animated-box">
          
            <div className="mission">
            <h3>Our Mission</h3> 
              <p>
                To deliver premium bakery products and beverages that inspire joy, delight, and satisfaction, while maintaining the highest standards of quality and customer care.
              </p>
            </div>
            
            <div className="vision">
            <h3>Our Vision</h3>
              <p>
                To be the leading bakery destination, known for our creativity, exceptional service, and a commitment to making every celebration extraordinary.
              </p>
            </div>
          </section>
          
          <section className="company-history animated-box">
            
          <h2>Our Story</h2>
            <p>
              <strong>{companyInfo.name}</strong> began as a small family-run bakery on <strong>{companyInfo.address}</strong>, created by three engineering students with a shared passion for culinary excellence. Over the years, under the visionary leadership of <strong>{companyInfo.manager}</strong>, we have grown into a trusted brand, offering custom cakes, premium beverages, and snacks that cater to diverse tastes.
            </p>
          </section>
           
          <h3>Meet Our Founders</h3>
          <section className="founders animated-box">
         
            <div className="founder">
              <img src={Founder1} alt="Founder 1" className="founder-photo" />
              <p className="founder-name"><strong>Helina Thomas</strong></p>
              <p className="founder-role">Co-Founder & <br/>Chief Baker</p>
            </div>
            <div className="founder">
              <img src={Founder2} alt="Founder 2" className="founder-photo" />
              <p className="founder-name"><strong>Mona Joesph</strong></p>
              <p className="founder-role">Co-Founder & <br/>Operations Head</p>
            </div>
            <div className="founder">
              <img src={Founder3} alt="Founder 3" className="founder-photo" />
              <p className="founder-name"><strong>Katrina kapoor</strong></p>
              <p className="founder-role">Co-Founder & <br/>Marketing Head</p>
            </div>
          </section>
        </div>
        <footer className="company-footer">
          <p>
            Thank you for choosing <strong>{companyInfo.name}</strong>. Your satisfaction is our priority, and we look forward to serving you again!
          </p>
        </footer>
      </div>
    </div>
  );
};

export default About;
