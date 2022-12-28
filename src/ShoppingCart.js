import React, { useState } from "react";

const ShoppingCart = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
    // Show notification
    console.log(`${item.name} added to the cart!`);
  };

  return (
    <div className="shopping-cart">
      {/* Render cart items */}
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
