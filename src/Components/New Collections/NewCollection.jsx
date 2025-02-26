import React from 'react';
import './NewCollection.css';
import New_product from '../../assets/newcollection';
import { Item } from '../Item/Item.jsx'

export const NewCollection = () => {
    return (
        <div className="Collection">
            <h1 className="Collection-title">Our Signature Dishes!!</h1>
            <hr className="Collection-hr" />
            <div className="Collection-items">
                {New_product.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewCollection
