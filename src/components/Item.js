import { useState } from "react";
import React from "react";




function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)
  function addToCart() {
    setIsInCart(!isInCart)
  }

  const appClassName = isInCart ? "in-cart" : ''
  const buttonText = !isInCart ? "Add to Cart" : "Remove From Cart"

  return (
    <li className={appClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
