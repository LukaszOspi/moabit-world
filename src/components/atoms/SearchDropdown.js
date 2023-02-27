import React from "react";

const SearchDropdown = ({
  allHashtags,
  selectedValues,
  handleCheckboxChange,
}) => {
  return (
    <div className="dropdown-menu">
      {allHashtags.map((item, index) => (
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
  );
};

export default SearchDropdown;
