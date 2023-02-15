import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../atoms/styles-atoms.css";

const ReplaceLineBreakChar = (props) => {
  try {
    const textWithNewLines = props.text.replace(/\n/g, "<br />");
    return <div dangerouslySetInnerHTML={{ __html: textWithNewLines }} />;
  } catch (error) {
    console.error("This text might be empty " + error);
    return <> </>;
  }
};

const AngeboteMoaFinder = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ items: [] });
  const [photoMap, setPhotoMap] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/qqdjjpwbe10z/environments/master/entries?access_token=ipuI0QhJrxpOc7c2Y6nK5wUOozD0vEF5_KLtKomPQjo&content_type=angebote`
      )
      .then((res) => {
        setData(res.data);
        const assets = res.data.includes.Asset;

        // Create a map of photo IDs to URLs
        const photoMap = assets.reduce((acc, asset) => {
          const id = asset.sys.id;
          const url = asset.fields.file.url;
          acc[id] = url;
          return acc;
        }, {});

        setPhotoMap(photoMap);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {error && <div>Error: {error}</div>}
      {loading && <div>Loading...</div>}
      {!error && !loading && data.items.length > 0 && (
        <div>
          {data.items.map((item, index) => (
            <div className="offer-wrapper" key={index}>
              <div className="title-stripe">
                <div>{item.fields.title}</div>
                <div>{item.fields.subtitle}</div>
              </div>
              <div className="offer-divider">
                <div className="offer-left">
                  <div>
                    <ReplaceLineBreakChar text={item.fields.shortDescription} />
                    {item.fields.photo && item.fields.photo.length > 0 && (
                      <div className="offer-images">
                        {item.fields.photo.slice(0, 3).map((photo, index) => (
                          <img
                            key={index}
                            src={photoMap[photo.sys.id]}
                            alt="Angebot"
                            className="offer-image"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "placeholder-image-url";
                            }}
                          />
                        ))}
                      </div>
                    )}
                    <div style={{ fontWeight: "bold" }}>
                      <ReplaceLineBreakChar text={item.fields.timeLocation} />
                      <div>{item.fields.contact}</div>
                    </div>
                  </div>
                </div>
                <div className="offer-right">
                  <div>{item.fields.hashtag}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AngeboteMoaFinder;
