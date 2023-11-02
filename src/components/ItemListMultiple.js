import React, { useState } from "react";
import "./ItemList.css";

function ItemLisMultiple({ items, onSelectItem }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      // If the item is already selected, deselect it
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
      onSelectItem(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      // If the item is not selected, select it
      setSelectedItems([...selectedItems, item]);
      onSelectItem([...selectedItems, item]);
    }
  };

  return (
    <div className="item-list-container" style={{ maxWidth: "200px" }}>
      <ul className="item-list">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(item)}
            className={selectedItems.includes(item) ? "selected" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemLisMultiple;
