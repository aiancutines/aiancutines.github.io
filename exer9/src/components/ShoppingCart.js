import React from 'react';

function ShoppingCart({ cartItems, removeFromCart }) {
  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (itemID, itemName) => {
    removeFromCart(itemID, itemName); // Call the removeFromCart function passed as a prop
    console.log (`Removing ${itemName} from cart.`);
  }

  // Calculate total count of items in the cart
  const totalCount = cartItems.length;
  
  // Render function
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>

      {/* Display total number of items */}
      <p>Total items: {totalCount} </p>

      {/* Render cart items or display a message if cart is empty */}
      {totalCount === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              {/* Button to remove an item from the cart */}
              <button onClick={() => handleRemoveFromCart(item.id, item.name)}>Remove</button> {/* Pass both id and name */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Export the ShoppingCart component
export default ShoppingCart;
