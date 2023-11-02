import React, { useState } from "react";
import "./ItemList.css";

function ItemList({ items, onSelectItem }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onSelectItem(item);
  };

  return (
    <div className="item-list-container" style={{ maxWidth: "200px" }}>
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
