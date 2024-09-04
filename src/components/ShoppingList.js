// ShoppingList.js
import React from "react";
import Item from "./Item";
import Filter from "./Filter"; // Import the Filter component

function ShoppingList({ items, selectedCategory, onCategoryChange }) {
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={onCategoryChange} /> {/* Include Filter */}
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
