import React from "react";

function DropdownMenu({
  isOpen,
  options,
  selectedValues,
  handleCheckboxChange,
}) {
  return (
    <>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((item, index) => (
            <label key={index}>
              <input
                type="checkbox"
                value={item}
                checked={selectedValues.includes(item)}
                onChange={handleCheckboxChange}
              />
              {item}
            </label>
          ))}
        </div>
      )}
    </>
  );
}
export default DropdownMenu;
