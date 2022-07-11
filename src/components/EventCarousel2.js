import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Event from "./atoms/Event";
import "./EventCarousel.css";
import axios from "axios";

const EventCarousel = () => {
  const [data, setData] = useState([]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios

      .get(
        "https://cdn.contentful.com/spaces/qqdjjpwbe10z/environments/master/entries?access_token=ipuI0QhJrxpOc7c2Y6nK5wUOozD0vEF5_KLtKomPQjo"
      )
      .then((res) => {
        console.log(res.data.items[0].fields.imageUrl);
        setData(res.data.items);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  } else
    return (
      <>
        <div className="carousel">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {/* {data.items.map((item) => (
              <div>
                <Event
                  imageUrl={item.fields.imageUrl}
                  title={item.fields.title}
                  text={item.fields.text}
                  linkUrl={item.fields.linkURL}
                  location={item.fields.location}
                  date={item.fields.date}
                />
              </div>
            ))} */}
          </Carousel>
        </div>
      </>
    );
};

export default EventCarousel;
