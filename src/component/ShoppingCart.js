


// src/components/ShoppingCart.js

import React, { useState } from 'react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [item, setItem] = useState('');

  const handleAddItem = () => {
    if (item.trim() !== '') {
      setCartItems([...cartItems, item]);
      setItem('');
    }
  };

  const handleRemoveItem = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div id="cart-container">
      <h1 id="cart-title">Shopping Cart</h1>
      <input
        id="cart-input"
        type="text"
        placeholder="Enter item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button id="add-item-button" onClick={handleAddItem}>
        Add Item
      </button>
      <ul id="cart-list">
        {cartItems.map((cartItem, index) => (
          <li key={index} id={`cart-item-${index}`}>
            {cartItem}
            <button
              className="remove-item-button"
              onClick={() => handleRemoveItem(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
