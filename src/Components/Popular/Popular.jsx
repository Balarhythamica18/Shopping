import React from 'react';
import '../../Components/Popular/Popular.css'
import data_product from '../../assets/data';
import { Item } from '../Item/Item';

const Popular = () => {
  return (
    <div className="popular">
      <h1 className="popular-title">Popular in Cakes</h1>
      <hr className="popular-hr" />
      <div className="popular-items">
        {data_product.map((item) => (
          <Item  key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
