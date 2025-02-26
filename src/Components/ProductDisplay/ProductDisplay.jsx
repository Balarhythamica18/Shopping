import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import Star from '../../assets/Star.png';
import Star_dull from '../../assets/Star dull.png';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [showNotification, setShowNotification] = useState(false);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    addToCart(product.id);
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="product-display-container">
      <div className="product-display-left">
        <div className="product-display-main-img">
          <img src={product.image} alt="Main" />
        </div>
      </div>
      <div className="product-display-right">
        <h1 className="product-title">{product.name}</h1>
        <div className="product-rating">
          <img src={Star} alt="Star" />
          <img src={Star} alt="Star" />
          <img src={Star} alt="Star" />
          <img src={Star} alt="Star" />
          <img src={Star_dull} alt="Star" />
          <p className="rating-count">(182)</p>
        </div>
        <div className="product-prices">
          <div className="price-old">Rs.{product.old_price}</div>
          <div className="price-new">Rs.{product.new_price}</div>
        </div>
        <div className="product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <button onClick={handleAddToCart}>Add To Cart</button>
        <p className='productdisplay-right-category'><span>Category : </span>{product.category}</p>
        <p className='productdisplay-right-category'><span>Tags : </span> Latest, new flavor</p>
      </div>

      {/* Notification Component */}
      {showNotification && (
        <div className="cart-notification">
             <p>🎉 Item successfully added to cart!</p>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
