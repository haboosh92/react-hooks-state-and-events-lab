import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
/*  const [category, setCategory] = useState("All");
  const handleFilter = (cate) => setCategory(cate.target.value)
  const newItems = items.filter((item) =>
  category ==="All"? true : item.category === category) 
  */
 const [category, setCategory] = useState("All");
 const handleFilter = (cate) => setCategory(cate.target.value)
 const newItems = items.filter((item) => category ==="All"? true : item.category === category)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(cate) => handleFilter(cate)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {
        
        newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
