import React ,{ useState } from "react";
import Item from "./Item";


function ShoppingList({ items }) {
  const [stateItems, changeItems] = useState(items)
  function handleFilter(e){
    if(e.target.value !== 'All') {
    changeItems(items.filter(item => item.category === e.target.value))
    }
    else {
      changeItems(items)
    }
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {stateItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
