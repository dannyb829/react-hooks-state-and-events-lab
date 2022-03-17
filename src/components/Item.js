import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCartStatus] = useState(true)
  const cartStatus = inCart?  "":'in-cart'
  const buttonClass = inCart? 'add' : 'remove'
  const buttonText = inCart? 'Add to Cart': 'Remove From Cart'
  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={()=> setCartStatus(!inCart)} className={buttonClass}>{buttonText}</button>
    </li>
  );
}

export default Item;
