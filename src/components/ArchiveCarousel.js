import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Event from "./atoms/Event";
import "./styles.css";
import axios from "axios";
import { CustomLeftArrow, CustomRightArrow } from "./CustomArrows";

const EventCarousel = () => {
  const [data, setData] = useState({ items: [] });

  const [setError] = useState("");
  // has had error that caused warning, problem when removed?
  const [loading, setLoading] = useState(false);

  // ${process.env.REACT_APP_CONTENT_MGM_KEY}
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://cdn.contentful.com/spaces/qqdjjpwbe10z/environments/master/entries?access_token=ipuI0QhJrxpOc7c2Y6nK5wUOozD0vEF5_KLtKomPQjo&content_type=events`
      )
      .then((res) => {
        //console.log(res.data.items[0].fields.imageUrl);
        setData(res.data);
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
      <div className="carousel">
        <Carousel
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={true}
          renderButtonGroupOutside={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          //  additionalTransfrom={
          //    window.innerWidth <= 1120 ? 2 * window.innerWidth : 1120
          //  }
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container"
          draggable
          focusOnSelect={false}
          infinite
          itemClass="itemCarousel"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderDotsOutside={false}
          rewind={true}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },

              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
        >
          {data.items
            // .filter((item, index) => index !== 2)
            .map((item, index) =>
              item.fields.archive === true ? (
                <div key={index}>
                  <Event
                    imageUrl={item.fields.imageUrl}
                    title={item.fields.title}
                    text={item.fields.text}
                    linkUrl={item.fields.linkUrl}
                    location={item.fields.location}
                    date={item.fields.date}
                    locationUrl={item.fields.locationUrl}
                    archive={item.fields.archive}
                  />
                </div>
              ) : null
            )}
        </Carousel>
      </div>
    );
};

export default EventCarousel;
