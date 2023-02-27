import React, { useState, useEffect } from "react";
import axios from "axios";
import ReplaceLineBreakChar from "../atoms/ReplaceLineBreakChar";
import "./../atoms/styles-atoms.css";
import Angebotstyp from "../../assets/angebotstyp.png";

const AngeboteMoaFinder = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ items: [] });
  const [photoMap, setPhotoMap] = useState({});
  const [hashTagList, setHashTagList] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [allData, setAllData] = useState({ items: [] });

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/qqdjjpwbe10z/environments/master/entries?access_token=ipuI0QhJrxpOc7c2Y6nK5wUOozD0vEF5_KLtKomPQjo&content_type=angebote`
      )
      .then((res) => {
        setAllData(res.data); // store initial data
        setData(res.data); // set data for display and filtering
        const assets = res.data.includes.Asset;

        // Create a map of photo IDs to URLs
        const photoMap = assets.reduce((acc, asset) => {
          const id = asset.sys.id;
          const url = asset.fields.file.url;
          acc[id] = url;
          return acc;
        }, {});

        setPhotoMap(photoMap);
        const hashTagList = res.data.items.flatMap(
          (item) => item.fields.hashtag
        );
        setHashTagList(hashTagList);
        console.log(hashTagList);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleCheckboxChange = (event) => {
    const value = event.target.value.trim();
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((val) => val !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
    let filteredData = allData.items;
    if (selectedValues.length > 0) {
      filteredData = allData.items.filter((item) => {
        if (item.fields.hashtag && Array.isArray(item.fields.hashtag)) {
          const hashtags = item.fields.hashtag.map((h) => h.trim());
          return selectedValues.every((value) => hashtags.includes(value));
        }
        return false;
      });
    }
    setData({ items: filteredData });
  };

  const handleSearch = () => {
    let filteredData = allData.items;
    if (selectedValues.length > 0) {
      filteredData = allData.items.filter((item) => {
        if (item.fields.hashtag && Array.isArray(item.fields.hashtag)) {
          const hashtags = item.fields.hashtag.map((h) => h.trim());
          return selectedValues.every((value) => hashtags.includes(value));
        }
        return false;
      });
    }
    setData({ items: filteredData });
  };

  const allHashtags = ["#THISISHASHTAG", "#THISISANOTHERHASHTAG"];

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const Angebote = ["option 1", "#THISISHASHTAG", "#THISISANOTHERHASHTAG"];

  return (
    <>
      {error && <div>Error: {error}</div>}
      {loading && <div>Loading...</div>}
      {!error && !loading && data.items.length > 0 && (
        <div>
          <div className="search-container">
            <div onClick={toggleDropdown}>
              <img src={Angebotstyp} alt="dropdown" />
            </div>
            {isOpen && (
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
            )}
            <button onClick={handleSearch}>Search</button>
          </div>
          {data.items.length === 0 && <div>No results found.</div>}
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
