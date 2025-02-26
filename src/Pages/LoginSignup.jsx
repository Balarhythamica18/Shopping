import React, { useState, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const LoginSignup = () => {
  const { setUsername } = useContext(ShopContext);
  const [isLogin, setIsLogin] = useState(false);
  const [inputUsername, setInputUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [tempUser, setTempUser] = useState(''); // Temporary storage for username during signup
  const [notification, setNotification] = useState(''); // Notification message

  const navigate = useNavigate();

  const toggleView = () => {
    setIsLogin(!isLogin);
    setNotification(''); // Clear notification on view change
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000); // Clear after 3 seconds
  };

  const handleSignup = () => {
    if (inputUsername && password && email) {
      setTempUser(inputUsername); // Store username temporarily
      setInputUsername('');
      setPassword('');
      setEmail('');
      setIsLogin(true); // Switch to login view after signup
      showNotification('Signup successful! Please login.');
    } else {
      showNotification('Please fill in all fields to sign up.');
    }
  };

  const handleLogin = () => {
    if (inputUsername && password) {
      if (inputUsername === tempUser) { // Verify username matches the signed-up user
        setUsername(inputUsername); // Update username in context
        setInputUsername('');
        setPassword('');
        navigate('/'); // Redirect to the home page
      } else {
        showNotification('Username does not match the signed-up user. Please try again.');
      }
    } else {
      showNotification('Please enter both username and password.');
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>

        {/* Notification Display */}
        {notification && <div className="notification">{notification}</div>}

        <div className="loginsignup-fields">
          <input
            className='login-username'
            type="text"
            placeholder="Username"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
          <input
            className='login-password'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isLogin && (
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}
        </div>
        <button onClick={isLogin ? handleLogin : handleSignup}>
          {isLogin ? 'Login' : 'Continue'}
        </button>
      
        {!isLogin && (
          <div className="loginsignup-agree">
            <input type="checkbox" name="agree" id="agree" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}

<p className="loginsignup-login">
          {isLogin ? (
            <>
              Don't have an account? <span onClick={toggleView}>Sign Up</span>
            </>
          ) : (
            <>
              Already have an account? <span onClick={toggleView}>Login</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;