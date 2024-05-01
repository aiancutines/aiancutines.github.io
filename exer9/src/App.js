// Importing necessary modules and components
import React, { useState } from 'react';
import Header from './components/Header';
import NavigationButton from './components/NavigationButton';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

// Initial data for the menus
const initialMenus = [
  {
    name: "Appliances",
    id: 1,
    options: [
      { name: "Washing Machines", url: "#", image: "washing_machine.jpg" },
      { name: "Refrigerators", url: "#", image: "refrigerator.jpg" },
      { name: "Microwaves", url: "#", image: "microwave.jpg" },
      { name: "Air Conditioners", url: "#", image: "air_conditioner.jpg" }
    ]
  },
  {
    name: "Gadgets",
    id: 2,
    options: [
      { name: "Smartphones", url: "#", image: "smartphone.jpg" },
      { name: "Laptops", url: "#", image: "laptop.jpg" },
      { name: "Tablets", url: "#", image: "tablet.jpg" },
      { name: "Wearables", url: "#", image: "wearable.jpg" }
    ]
  },
  {
    name: "Accessories",
    id: 3,
    options: [
      { name: "Phone Cases", url: "#", image: "phone_case.jpg" },
      { name: "Laptop Bags", url: "#", image: "laptop_bag.jpg" },
      { name: "Headphones", url: "#", image: "headphones.jpg" },
      { name: "Chargers", url: "#", image: "charger.jpg" }
    ]
  },
];

function App() {
  // State variables to manage selected category and cart items
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Function to handle selecting a category
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Function to handle adding an item to the cart
  const handleAddToCart = (itemName) => {
    const newItem = { id: cartItems.length + 1, name: itemName };
    setCartItems([...cartItems, newItem]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  // Render function
  return (
    <div className="container">
      {/* Header component */}
      <Header title="Lazado E-commerce" />
      <div className="content">
        {/* Navigation buttons */}
        <div className="navigation">
          {initialMenus.map(menu => (
            <NavigationButton
              key={menu.id}
              name={menu.name}
              options={menu.options}
              onSelect={() => handleCategorySelect(menu.name)}
              isSelected={menu.name === selectedCategory}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        {/* Shopping cart component */}
        <div className="cart-container">
          <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

// Exporting the App component
export default App;
