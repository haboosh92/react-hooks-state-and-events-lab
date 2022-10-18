import React, {useState} from "react";


function Item({ name, category }) {
const [inCart , setinCart] = useState("false");
function handleCart(){
  setinCart((inCart) => (!inCart));
}

const buttonClass = inCart ? "add":"remove" ;
const liClass = inCart ? "null":"in-cart";
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={()=> handleCart()}> {inCart? 'Add to Cart':'Remove From Cart'} </button>
    </li>
  );
}

export default Item;
