import React, { useState, useEffect } from "react";
import "./EventCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Event from "./atoms/Event";
import "./EventCarousel.css";
import axios from "axios";
import leftArrow from "./../assets/prev.png";
import rightArrow from "./../assets/next.png";
import TextBox from "./atoms/TextBox";
import ImageResponsive from "./atoms/ImageResponsive";
import Ortstermin1 from "./../assets/ortstermin4.jpg";
import Ortstermin2 from "./../assets/ortstermin3.jpg";

const Ortstermin = () => {
  const [data, setData] = useState({ items: [] });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ${process.env.REACT_APP_CONTENT_MGM_KEY}
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://cdn.contentful.com/spaces/qqdjjpwbe10z/environments/master/entries?access_token=ipuI0QhJrxpOc7c2Y6nK5wUOozD0vEF5_KLtKomPQjo&content_type=ortstermin`
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
    return <p>Be kind to other people</p>;
  } else
    return (
      <>
        <div>
          <TextBox
            title="Ortstermin 2022: LAUT ))) Wir weigern uns, Feinde zu sein"
            text="Erkundet den Refo-Campus des diesjährigen moabitweiten Kunstfestivals Ortstermin.
          An verschiedenen Orten stellen Künstler:innen ihre Arbeiten zum Festival-Thema 'LAUT ))) Wir weigern uns,
          Feinde zu sein' aus. Am Bauwagen beim SommerCafé gibt es leckeren Kaffee und Limos.
          Außerdem erwarten euch eine Konzept-Performance und die Abendveranstaltung 'PopPeacePoetry - 
          gefällige und wiederständische Töne zu Gewalt und Liebe'. Klickt euch hier jetzt durch die verschiedenen
          Künstler:innen und ihre Werke. Viel Freude!"
            color="black"
          />
        </div>
        <ImageResponsive src={Ortstermin2} />
        <ImageResponsive src={Ortstermin1} />
        <div className="carousel">
          <Carousel
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={true}
            renderButtonGroupOutside={false}
            //customLeftArrow={<CustomLeftArrow />}
            //customRightArrow={<CustomRightArrow />}
            additionalTransfrom={
              window.innerWidth <= 1400 ? 2 * window.innerWidth : 1400
            }
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
            <div></div>
            {data.items.length
              ? data.items.map((item, index) => (
                  <div key={index}>
                    <Event
                      imageUrl={item.fields.imageUrl}
                      title={item.fields.title}
                      text={item.fields.text}
                      linkUrl={item.fields.linkUrl}
                      location={item.fields.location}
                      date={item.fields.date}
                      locationUrl={item.fields.locationUrl}
                    />
                  </div>
                ))
              : null}
          </Carousel>
        </div>
      </>
    );
};

export default Ortstermin;
