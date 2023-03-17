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

  /* 
  Those handlers take care of all search button categories seperately
  including mobile and desktop versions
  */

  // triggered only on desktop
  const handleMouseOver = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    }
  };
  // triggered only on mobile / tablet
  const handleClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };
  // triggered only on desktop (cannot be true on mobile)
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

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
              {item}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
