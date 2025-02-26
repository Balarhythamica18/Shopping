import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './PlaceOrder.css';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const discountThreshold = 1000;
  const discountPercentage = 0.25;
  const discountAmount = totalAmount >= discountThreshold ? totalAmount * discountPercentage : 0;
  const finalAmount = totalAmount - discountAmount;
  const totalToPay = Math.round(finalAmount + 20);

  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  const [error, setError] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error message when typing
  };

  // Form validation before proceeding
  const handlePlaceOrder = () => {
    const isEmptyField = Object.values(formData).some((value) => value.trim() === '');
  
    if (isEmptyField) {
      setError('⚠️ Please fill all the delivery information fields.');
      
      // Hide the error message after 5 seconds
      setTimeout(() => {
        setError('');
      }, 5000);
    } else {
      navigate('/payment');
    }
  };
  
  return (
    <div className="order-container">
      <div className="order-left">
        <p className="order-title">Delivery Information</p>
        <div className="multi-input-fields">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={formData.street}
          onChange={handleChange}
        />

        <div className="multi-input-fields">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
        </div>

        <div className="multi-input-fields">
          <input
            type="text"
            name="zipCode"
            placeholder="Zip code"
            value={formData.zipCode}
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="order-summary">
        <div className="billing-details">
          <h2>Bill Details</h2>
          <div className="bill-item">
            <p>SubTotal</p>
            <p>Rs.{totalAmount}</p>
          </div>
          {totalAmount >= discountThreshold && (
            <div className="bill-item">
              <p>Discount Amount</p>
              <p>
                <span className="discount-amount">-Rs.{discountAmount}</span>
              </p>
            </div>
          )}
          <div className="bill-item">
            <p>Delivery Fee</p>
            <p><span className="free">Free</span></p>
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
          <div className="order-action">
            <button 
  className="confirm-order-btn" 
  onClick={() => {
    window.scrollTo(0, 0);
    handlePlaceOrder();
  }}
>
  Proceed to Payment
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
