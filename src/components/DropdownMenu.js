"use client";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const DropdownMenu = ({ selectedItem, setSelectedItem, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false); // Close dropdown after item is selected
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="button-form drop-button">
        {selectedItem?.text ? (
          <span>{selectedItem?.text}</span>
        ) : (
          "Choose a language"
        )}
        {
          <span className="icon-drop">
            <FaCaretDown />
          </span>
        }
      </button>
      {isOpen && (
        <div className="dropdownContent">
          {items.map((item, index) => (
            <div
              key={index}
              className="dropdownItem"
              onClick={() => handleItemClick(item)}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
