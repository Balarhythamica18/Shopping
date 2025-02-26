import React from 'react';
import Offer_img from '../../assets/offer.png';
import '../Offer/Offer.css';
import { Link } from 'react-router-dom';

export const Offer = () => {
  return (
    <div className="Offer">
      <div className="Offer-left">
        <div className="title">
          <h1>New Dishes Available!</h1>
          <h4>Surely on <span>LOW PRICE</span></h4>
        </div>
        <p className="offer-para">
          Discover our exciting new dishes, crafted with the finest ingredients and prepared by our talented chefs.
        </p>
        <button className="Start">
          <Link to='/cakes'>Start tasting!!</Link>
          
          </button>
      </div>
      <div className="Offer-right">
        <img src={Offer_img} alt="Special Offer" className="offer-image" />
      </div>
    </div>
  );
};