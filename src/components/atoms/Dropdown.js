import React, { useState, useEffect } from "react";

const Dropdown = ({
  name,
  onItemSelect,
  children,
  onItemClick,
  handleCheckboxChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseOver = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // Function to remove '#' from the beginning of a string
  const removeHash = (str) => (str.startsWith("#") ? str.substring(1) : str);

  return (
    <div
      className="dropdown-container"
      onMouseOver={handleMouseOver}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isOpen && (
        <div className="dropdown-menu">
          {name.map((item, index) => (
            <label
              className="checkbox-label"
              key={index}
              onClick={(e) => onItemClick(e, item)}
            >
              <input
                type="checkbox"
                value={item}
                checked={onItemSelect.includes(item)}
                onChange={handleCheckboxChange}
              />
              <span className="checkbox-custom"></span>
              {removeHash(item)} {/* Using the removeHash function here */}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
