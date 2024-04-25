import React, { useState } from 'react';

function NavigationButton({ name, options, onSelect }) {
  // State to manage whether options are shown or hidden
  const [showOptions, setShowOptions] = useState(false);

  // Function to toggle the display of options
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  // Function to handle adding an item to the cart
  const handleAddToCart = (optionName) => {
    console.log(`Added ${optionName} to cart`);
  };

  return (
    <div>
      {/* Button to toggle the display of options */}
      <button onClick={toggleOptions} className="category-button">
        {name}
      </button>
      {/* Options list, displayed when showOptions is true */}
      {showOptions && (
        <ul className="options-list">
          {/* Mapping through each option to display */}
          {options.map(option => (
            <li key={option.name} className="option-item">
              {/* Displaying the image of the option */}
              <img src={`/${option.image}`} alt={option.name} className="option-image" />
              {/* Displaying the name of the option */}
              <div className="option-details">
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

export default NavigationButton;
