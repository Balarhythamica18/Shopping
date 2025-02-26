import React from 'react';
import { Link } from 'react-router-dom'; 
import './Item.css'; 

export const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} className='image' src={image} alt={name} />
      </Link>
      <p className='item-name'>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">Rs.{new_price.toFixed(2)}</div>
        <div className="item-price-old">Rs.{old_price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Item;
