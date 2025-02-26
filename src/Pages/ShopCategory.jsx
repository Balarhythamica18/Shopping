import React, { useContext, useState, useLayoutEffect } from 'react';
import './ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import { Item } from '../Components/Item/Item';


const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);  

  
  useLayoutEffect(() => {
    const img = new Image();
    img.src = props.banner;

    img.onload = () => {
      setIsBannerLoaded(true);
    };
  }, [props.banner]);  

  // Handle changes in the search input field
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter products based on the search query and category
  const filteredProducts = allProducts
    .filter(item => item.category === props.category)
    .filter(item => item.name.toLowerCase().includes(searchQuery));

  return (
    <div className="shop-category">
      {isBannerLoaded ? (
        <img className='Banner-Img' src={props.banner} alt="Shop Category Banner" />
      ) : (
        <p>Loading banner...</p>  
      )}
      
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of {allProducts.length} products
        </p>
        <div className="shop-category-sort">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredProducts.map(item => (
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

      <div className="explore-btn">
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
