import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./EventCarousel.css";
import prev from "./../assets/prev.png";
import next from "./../assets/next.png";
/* import TextBox from "./atoms/TextBox"; */

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const EventCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 10000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <>
      <div
        {...handlers}
        className="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="indicators">
          <button
            className="buttons"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <img src={prev} alt="prev" />
          </button>
          <div
            className="inner"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "100%" });
            })}
          </div>
          <button
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <img src={next} alt="next" />
          </button>
        </div>
      </div>
    </>
  );
};

export default EventCarousel;
