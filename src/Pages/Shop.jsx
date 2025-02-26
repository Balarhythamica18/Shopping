// Shop.jsx

import React from 'react';
import Main from '../Components/Main/Main';

import { NewCollection } from '../Components/New Collections/NewCollection';
import { NewsLetter } from '../Components/NewsLetter/NewsLetter';
import Popular from '../Components/Popular/Popular';
import { Offer } from '../Components/Offer/Offer';
import '../Pages/Shop.css'
import AddDownload from '../Components/AddDownload/AddDownload';






const Shop = () => {
  return (
    <div className='Shop'>
      <Main />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
      <AddDownload />
      
    
    </div>
  );
};

export default Shop;
