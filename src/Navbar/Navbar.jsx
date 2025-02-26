import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Logo.png';
import Basket from '../assets/Basket.png';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const{getTotalCartItems, username} = useContext(ShopContext)
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-menu">
        <ul>
          <li onClick={() => setMenu('shop')}>
            <Link to="/" className={menu === 'shop' ? 'active' : ''}>
              Shop
            </Link>
          </li>
          <li onClick={() => setMenu('Cakes')}>
            <Link to="/Cakes" className={menu === 'Cakes' ? 'active' : ''}>
              Cakes
            </Link>
          </li>
          <li onClick={() => setMenu('Juice')}>
            <Link to="/Juice" className={menu === 'Juice' ? 'active' : ''}>
              Juice
            </Link>
          </li>
          <li onClick={() => setMenu('Snacks')}>
            <Link to="/snacks" className={menu === 'Snacks' ? 'active' : ''}>
              Snacks
            </Link>
          </li>
        </ul>
      </div>
      <div className="log-info">
        <button className='login-btn'>
          <Link to="/login">
          {username ? `Welcome, ${username}` : 'Login'}
          </Link>
        </button>
        <Link to="/cart" className="basket">
          <img src={Basket} alt="Basket" />
          <div className="count">{getTotalCartItems()}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
