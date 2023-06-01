import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setselectedCategory] = useState("All")

  function selectionProduct(event) {
    console.log(event.target.value)
    setselectedCategory(event.target.value)


  }


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={selectionProduct}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.filter((item) => item.category === selectedCategory || selectedCategory === "All").map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
