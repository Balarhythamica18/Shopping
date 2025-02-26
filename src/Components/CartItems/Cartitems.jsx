import React, { useState, useContext } from 'react';
import '../../Components/CartItems/Cartitems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../assets/remove.png';

import { Link, useNavigate } from 'react-router-dom';

const Cartitems = () => {
  const {
    getTotalCartAmount,
    allProducts,
    removeFromCart,
    cartItems,
    updateCartItemQuantity,
    clearCart,
    username,
  } = useContext(ShopContext);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate(); // Corrected navigation method

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = () => {
    setShowPaymentDialog(false);
    navigate('/order'); // Navigate to order page
  };

  const selectedItems = allProducts.filter((product) => cartItems[product.id] > 0);

  const totalAmount = getTotalCartAmount();
  const discountThreshold = 1000;
  const discountPercentage = 0.25;
  const discountAmount = totalAmount >= discountThreshold ? totalAmount * discountPercentage : 0;
  const finalAmount = totalAmount - discountAmount;
  const totalToPay = Math.round(finalAmount + 20);
  const remainingAmountForDiscount = discountThreshold - totalAmount;

  return (
    <div className="cartitems">
      <div className="cartitems-grid">
        {/* Cart Details */}
        <div className="cart-details">
          <h2>Cart Details</h2>
          {selectedItems.length > 0 ? (
            <div className="cart-items">
              {selectedItems.map((product) => {
                const quantity = cartItems[product.id];
                return (
                  <div className="cart-item" key={product.id}>
                    <div className="cart-left">
                      <h2>{product.name}</h2>
                      <p>Rs.{product.new_price.toFixed(2)}</p>
                      <p>Quantity: {quantity}</p>
                      <div className="quantity-controls">
                        <button onClick={() => updateCartItemQuantity(product.id, quantity - 1)}>-</button>
                        <p>{quantity}</p>
                        <button onClick={() => updateCartItemQuantity(product.id, quantity + 1)}>+</button>
                      </div>
                      <p>
                        <b>Total: Rs.{product.new_price * quantity}</b>
                      </p>
                    </div>
                    <div className="cart-right">
                      <button onClick={() => removeFromCart(product.id)}>
                        <img src={remove_icon} alt="Remove" />
                      </button>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="empty">
              <p className="empty-message">
                <i className="fas fa-shopping-cart"></i>Oops!! Your cart is empty
              </p>
              <Link to="/">
                <button className="empty-button">
                  <i className="fas fa-arrow-circle-right"></i> Start Ordering!
                </button>
              </Link>
            </div>
          )}

          {/* Discount Message */}
          {selectedItems.length > 0 && totalAmount < discountThreshold && remainingAmountForDiscount > 0 && (
            <div className="discount-message">
              <p className="message-text">
                Hey {username}! add Rs.{remainingAmountForDiscount} more to your order and enjoy a 25% discount!
              </p>
            </div>
          )}

          {selectedItems.length > 0 && totalAmount >= discountThreshold && (
            <div className="discount-message">
              <p className="message-text">Congratulations {username}! You've received a 25% discount on your order.</p>
            </div>
          )}

          {/* Add Item and Clear Cart buttons */}
          {selectedItems.length > 0 && (
            <div className="add-cart-remove-buttons">
              <button className="add-item-btn">
                <Link to="/" className="add-item-link">
                  <i className="fas fa-plus-circle"></i> Add Item
                </Link>
              </button>

              <button className="clear-cart-btn" onClick={clearCart}>
                <i className="fas fa-trash-alt"></i> Clear Cart
              </button>
            </div>
          )}
        </div>

        {/* Bill Details */}
        {selectedItems.length > 0 && (
          <div className="bill-details">
            <h2>Bill Details</h2>
            <div className="bill-item">
              <p>SubTotal</p>
              <p>Rs.{totalAmount}</p>
            </div>
            {totalAmount >= discountThreshold && (
              <div className="bill-item">
                <p>Discount Amount</p>
                <p>
                  <span className="discount-amount">-{discountAmount}</span>
                </p>
              </div>
            )}
            <div className="bill-item">
              <p>Delivery Fee</p>
              <p>
                <span className="free">Free</span>
              </p>
            </div>
            <div className="bill-item">
              <p>Platform Fee</p>
              <p>Rs.5</p>
            </div>
            <div className="bill-item">
              <p>GST</p>
              <p>Rs.15</p>
            </div>
            <hr />
            <div className="total-to-pay">
              <h3>Total to Pay</h3>
              <h3>Rs.{totalToPay}</h3>
            </div>
            <div className="end">
              <button 
              className="confirm" 
              onClick={()=>{
                window.scrollTo(0, 0);
                handlePlaceOrder();
              }}>
                Proceed to CheckOut
              </button>
            </div>
          </div>
        )}

       
      </div>
    </div>
  );
};

export default Cartitems;
