import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './Payment.css'; // Add your styles here
import mastercard from '../assets/master-card.png';
import { FaSpinner } from 'react-icons/fa'; // For the spinner icon


const Payment = () => {
  const {
    getTotalCartAmount,
    allProducts,
    username,
    cartItems,
    updateCartItemQuantity,
    removeFromCart
  } = useContext(ShopContext);

  // State to track form input values
  const [email, setEmail] = useState('');
  const [cardInfo, setCardInfo] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [country, setCountry] = useState('');
  const [isProcessing, setIsProcessing] = useState(false); // To control the loading state
  const [paymentStatus, setPaymentStatus] = useState(null); // To track the payment status
  const [isFormValid, setIsFormValid] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to show the modal

  // Validate the form when any field changes
  useEffect(() => {
    const isValid = email && cardInfo && expiry && cvc && cardHolderName && country;
    setIsFormValid(isValid);
  }, [email, cardInfo, expiry, cvc, cardHolderName, country]);

  const selectedItems = allProducts.filter((product) => cartItems[product.id] > 0);

  const totalAmount = getTotalCartAmount();
  const discountThreshold = 1000;
  const discountPercentage = 0.25;
  const discountAmount = totalAmount >= discountThreshold ? totalAmount * discountPercentage : 0;
  const finalAmount = totalAmount - discountAmount;
  const totalToPay = Math.round(finalAmount + 20); // Adding a fixed shipping fee (e.g., Rs. 20)

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate a payment process with a 3-second delay
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentStatus('confirmed'); // Change payment status after processing
      setShowModal(true); // Show the modal after payment is confirmed
    }, 3000);
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    // Redirect to home after closing the modal
    window.location.href = '/'; // You can replace this with a routing solution if using React Router
  };

  return (
    <div className="payment-container">
      <div className="payment-left">
        <h1 className="total-heading">Total Payment</h1>
        <div className="total-amount">
          <p className="total-amount-value">₹{totalToPay}</p>
        </div>

        <div className="payment-items-list">
          {selectedItems.length > 0 ? (
            selectedItems.map((product) => {
              const quantity = cartItems[product.id];
              const productTotal = (product.new_price * quantity).toFixed(2);

              return (
                <div className="payment-item" key={product.id}>
                  <div className="payment-item-details">
                    <div className="payment-item-info">
                      <h3 className="payment-item-name">{product.name}</h3>
                      <p className="payment-item-quantity">Qty: {quantity}</p>
                    </div>
                    <div className="payment-item-info">
                      <div className="cart-item-total">
                        <p><strong>₹{parseFloat(productTotal).toFixed(0)}</strong></p>
                      </div>
                      <p className="cart-item-price">₹{parseFloat(product.new_price).toFixed(0)} each</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="no-items-message">No items in the cart.</p>
          )}
        </div>
      </div>

      <div className="payment-right">
        <h2 className="payment-details-heading">Pay With Card</h2>
        <div className="card-detail">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="card-information">
            <label>Card information</label>
            <div className="card-input-container">
              <input
                type="text"
                placeholder="1234 5678 9012"
                value={cardInfo}
                onChange={(e) => setCardInfo(e.target.value)}
              />
              <img className="mastercard-icon" src={mastercard} alt="Mastercard" />
            </div>

            <div className="card-month">
              <input
                type="text"
                placeholder="MM / YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
              <input
                type="text"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
          </div>

          <div className="card-name">
            <label>CardHolder name</label>
            <input
              type="text"
              placeholder="Full name on card"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
            />
          </div>

          <div className="country">
            <label>Country or region</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select Country</option>
              <option value="india">India</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
            </select>
          </div>

          <button
            onClick={handlePayment}
            disabled={!isFormValid || isProcessing}
            className={`pay-button ${paymentStatus === 'confirmed' ? 'confirmed' : ''}`}
          >
            {isProcessing ? (
              <div className="loading-container">
                <FaSpinner className="spinner-icon" />
                Processing...
              </div>
            ) : paymentStatus === 'confirmed' ? (
              <div className="confirmation-tick">
                ✅ Payment Confirmed
              </div>
            ) : (
              'Pay'
            )}
          </button>
        </div>
      </div>

      {/* Modal for Payment Confirmation */}
      {showModal && (
  <div className="payment-modal">
    <div className="modal-content">
      <div className="modal-header">
        <h3>Order Confirmed <i className="fas fa-check-circle"></i></h3>
      </div>
      <div className="modal-body">
        <p className="food-alert">We're preparing your food! 🍽️</p>
        <p className="tracking-alert">A tracking link will be sent to your registered mobile number 📲.</p>
        <p className="greeting">Thank you for ordering! Have a nice day! <i className="fas fa-heart"></i></p>
      </div>
      <div className="modal-footer">
        <button onClick={handleCloseModal} className="home-button">Go to Home</button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Payment;
