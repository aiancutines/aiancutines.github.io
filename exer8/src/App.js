import React, { useState } from 'react';
import Header from './components/Header'; // Importing the Header component
import NavigationButton from './components/NavigationButton'; // Importing the NavigationButton component
import './App.css'; // Importing the CSS file for styling

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
  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to handle the selection of a category
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      {/* Header component with title */}
      <Header title="Lazado E-commerce" />
      {/* Navigation section with NavigationButton components */}
      <div className="navigation">
        {/* Mapping over the initialMenus array to render NavigationButton for each menu */}
        {initialMenus.map(menu => (
          <NavigationButton
            key={menu.id}
            name={menu.name}
            options={menu.options}
            onSelect={() => handleCategorySelect(menu.name)}
            isSelected={menu.name === selectedCategory}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
