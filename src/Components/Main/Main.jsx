import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Main.css'; 
import pinkCakeImage from '../../assets/pinkcake.png'; 

const Main = () => {
  return (
    <div className="Main">
      <div className="main-left" style={{ backgroundImage: `url(${pinkCakeImage})` }}>
        <p>New Taste Only!!!</p>
        <h1>Welcome to <span>BE Bakers</span></h1>
        <p>All About for Cake, Juice and Snacks Lovers!!</p>
        <div className="btn">
          <Link to="/Cakes"> {/* Wrap Link around your button */}
            <button>Explore More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
