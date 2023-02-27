import React from "react";

const DropdownWithImage = ({
  title,
  options,
  selectedOptions,
  handleCheckboxChange,
  isOpen,
  toggleDropdown,
  icon,
  multiple = false,
}) => {
  return (
    <div className="dropdown-with-image">
      <label htmlFor="dropdown-with-image" onClick={toggleDropdown}>
        <img src={icon} alt={title} />
        {title}
      </label>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <label key={option}>
              <input
                type={multiple ? "checkbox" : "radio"}
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={handleCheckboxChange}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownWithImage;
