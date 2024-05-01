import React, { useState } from 'react';

function NavigationButton({ name, options, onSelect, onAddToCart }) {
  // State variable to manage whether options are shown or not
  const [showOptions, setShowOptions] = useState(false);

  // Function to toggle the display of options
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  // Function to handle adding an item to the cart
  const handleAddToCart = (itemName) => {
    onAddToCart(itemName); // Call the onAddToCart function passed as a prop
    console.log(`Added ${itemName} to cart.`);
  };

  // Render function
  return (
    <div>
      {/* Button to toggle the display of options */}
      <button onClick={toggleOptions} className="category-button">
        {name}
      </button>
      {/* Display options if showOptions is true */}
      {showOptions && (
        <ul className="options-list">
          {/* Map through options array to render each option */}
          {options.map(option => (
            <li key={`${option.name}-${option.image}`} className="option-item"> {/* Use a unique key */}
              {/* Image for the option */}
              <img src={`/${option.image}`} alt={option.name} className="option-image" />
              <div className="option-details">
                {/* Name of the option */}
                <span>{option.name}</span>
                {/* Button to add the option to the cart */}
                <button onClick={() => handleAddToCart(option.name)} className="add-to-cart">Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Export the NavigationButton component
export default NavigationButton;
