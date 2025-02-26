import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';  
import CakeBanner from './assets/CakeBanner.png';
import JuiceBanner from './assets/JuiceBanner.png';
import ChatsBanner from './assets/ChatsBanner.png';
import PlaceOrder from './Pages/PlaceOrder';
import Payment from './Pages/Payment';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cakes" element={<ShopCategory banner={CakeBanner} category="Cakes" />} />
        <Route path="/juice" element={<ShopCategory banner={JuiceBanner} category="Juice" />} />
        <Route path="/Snacks" element={<ShopCategory banner={ChatsBanner} category="Snacks" />} />
        <Route path="/product" element={<Product/>}
>
<Route path=":productId" element={<Product />} />
</Route>
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path='/order' element ={<PlaceOrder />}/>
        <Route path='/payment' element={<Payment />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  
  );
};

export default App;
