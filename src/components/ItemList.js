import React, { useState } from "react";
import "./ItemList.css";

function ItemList({ items, onSelectItem }) {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (item) => {
    console.log(item);
    setSelectedItem(item);
    onSelectItem(item);
  };

  return (
    <div className="item-list-container">
      <ul className="item-list">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(item)}
            className={selectedItem === item ? "selected" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
