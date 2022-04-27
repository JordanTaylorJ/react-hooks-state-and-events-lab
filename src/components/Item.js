import React, {useState} from "react";
//import items from "../data/items";

function Item({ name, category }) {
  const [cartItems, setCartItems] = useState(false);

  function handleClick(){
    setCartItems((cartItems) => !cartItems) 
  }


  return (
    <li className={cartItems ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartItems ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
  }

export default Item;
