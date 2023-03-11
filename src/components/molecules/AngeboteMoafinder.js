import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";
import "./../atoms/styles-atoms.css";
import ReplaceLineBreakChar from "../atoms/ReplaceLineBreakChar";
import Angebotstyp from "../../assets/angebotstyp.png";
import Gruppen from "../../assets/gruppen.png";
import Orte from "../../assets/orte.png";
import Kosten from "../../assets/kosten.png";
import Sprachen from "../../assets/sprachen.png";
import Barrierefreiheit from "../../assets/barrierefreiheit.png";
import TextBox from "../atoms/TextBox";
import searchButton from "../../assets/search_button.png";
import location from "../../assets/location.png";

const AngeboteMoaFinder = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ items: [] });
  const [photoMap, setPhotoMap] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [hashTagList, setHashTagList] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [angebotstypOpen, setAngebotstypOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [orteOpen, setOrteOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [gruppenOpen, setGruppenOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [kostenOpen, setKostenOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [sprachenOpen, setSprachenOpen] = useState(false);
  const [barrierefreiheitOpen, setBarrierefreiheitOpen] = useState(false);
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
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((val) => val !== value));
    }
    handleSearch();
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

  useEffect(() => {
    // Filter data based on selected values
    let filteredData = allData.items;
    if (selectedValues.length > 0) {
      filteredData = allData.items.filter((item) => {
        if (selectedValues.includes(item.category)) {
          return true;
        }
        if (selectedValues.includes(item)) {
          return true;
        }
        if (item.fields.hashtag && Array.isArray(item.fields.hashtag)) {
          const hashtags = item.fields.hashtag.map((h) => h.trim());
          return selectedValues.every((value) => hashtags.includes(value));
        }
        return false;
      });
    }
    // Update state with filtered data
    setData({ items: filteredData });
  }, [allData, selectedValues]);

  const HashAngebotstyp = ["#Beratung", "#Musik", "#Gesang"];
  const HashGruppen = [
    "#Erwachsene",
    "#Kinder",
    "#Jugendliche",
    "#Senior*innen",
    "#Familien",
    "#geflüchteteMenschen",
  ];
  const HashOrte = ["#RefoBeussel"];
  const HashKosten = ["#kostenlos", "#kostenpflichtig"];
  const HashSprachen = [
    "#Italienisch",
    "#Deutsch",
    "#Arabisch",
    "#Türkisch",
    "#Englisch",
    "#Bulgarisch",
    "#Kurdisch",
    "#Tigrinya",
  ];
  const HashBarrierefreiheit = ["#barrierefrei"];

  /* 
  Those handlers take care of all search button categories seperately
  including mobile and desktop versions
  */

  // Angebotstyp
  // triggered only on desktop
  const handleAngebotstypMouseOver = () => {
    if (window.innerWidth >= 768) {
      setAngebotstypOpen(true);
    }
  };

  // triggered only on mobile / tablet
  const handleAngebotstypClick = () => {
    if (window.innerWidth < 768) {
      setAngebotstypOpen(!angebotstypOpen);
    }
  };

  // triggered only on desktop (cannot be true on mobile)
  const handleAngebotstypMouseLeave = () => {
    setAngebotstypOpen(false);
  };

  // Gruppen
  const handleGruppenMouseOver = () => {
    if (window.innerWidth >= 768) {
      setGruppenOpen(true);
    }
  };
  const handleGruppenClick = () => {
    if (window.innerWidth < 768) {
      setGruppenOpen(!gruppenOpen);
    }
  };

  const handleGruppenMouseLeave = () => {
    setGruppenOpen(false);
  };

  // Orte
  const handleOrteMouseOver = () => {
    if (window.innerWidth >= 768) {
      setOrteOpen(true);
    }
  };
  const handleOrteClick = () => {
    if (window.innerWidth < 768) {
      setOrteOpen(!orteOpen);
    }
  };

  const handleOrteMouseLeave = () => {
    setOrteOpen(false);
  };

  // Kosten
  const handleKostenMouseOver = () => {
    if (window.innerWidth >= 768) {
      setKostenOpen(true);
    }
  };

  const handleKostenMouseLeave = () => {
    setKostenOpen(false);
  };
  const handleKostenClick = () => {
    if (window.innerWidth < 768) {
      setKostenOpen(!kostenOpen);
    }
  };

  // Sprachen
  const handleSprachenMouseOver = () => {
    if (window.innerWidth >= 768) {
      setSprachenOpen(true);
    }
  };

  const handleSprachenMouseLeave = () => {
    setSprachenOpen(false);
  };
  const handleSprachenClick = () => {
    if (window.innerWidth < 768) {
      setSprachenOpen(!sprachenOpen);
    }
  };

  // Barrierefreiheit
  const handleBarrierefreiheitMouseOver = () => {
    if (window.innerWidth >= 768) {
      setBarrierefreiheitOpen(true);
    }
  };

  const handleBarrierefreiheitMouseLeave = () => {
    setBarrierefreiheitOpen(false);
  };
  const handleBarrierefreiheitClick = () => {
    if (window.innerWidth < 768) {
      setBarrierefreiheitOpen(!barrierefreiheitOpen);
    }
  };

  return (
    <>
      <div className="moafinder-container">
        <div className="moafinder-info">
          <div>
            <button className="search-button">
              <img
                src={searchButton}
                alt="searchButton"
                className="search-button"
                onClick={handleSearch}
              />
            </button>
          </div>
          <div>
            <TextBox
              title="MoaFinder: Angebote in Moabit für ein Aktives Miteinander"
              text="Ihr habt Lust auf Töpfern, wollt im Chor singen oder sucht ein Beratungscafé? Sport, ein Friedensgebet und ein Sprachkurs würden euch helfen? Hier findet Ihr viele Orte und Angebote in Moabit.
"
            ></TextBox>
          </div>
        </div>
      </div>

      <div className="search-container">
        <div
          className="dropdown-container"
          onMouseOver={handleAngebotstypMouseOver}
          onMouseLeave={handleAngebotstypMouseLeave}
          onClick={handleAngebotstypClick}
        >
          <img src={Angebotstyp} alt="dropdown" />
          {angebotstypOpen && (
            <div className="dropdown-menu">
              {HashAngebotstyp.map((item, index) => (
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
        </div>

        <div
          className="dropdown-container"
          onMouseOver={handleGruppenMouseOver}
          onMouseLeave={handleGruppenMouseLeave}
          onClick={handleGruppenClick}
        >
          <img src={Gruppen} alt="dropdown" />
          {gruppenOpen && (
            <div className="dropdown-menu">
              {HashGruppen.map((item, index) => (
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
        </div>
        <div
          className="dropdown-container"
          onMouseOver={handleOrteMouseOver}
          onMouseLeave={handleOrteMouseLeave}
          onClick={handleOrteClick}
        >
          <img src={Orte} alt="dropdown" />
          {orteOpen && (
            <div className="dropdown-menu">
              {HashOrte.map((item, index) => (
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
        </div>

        <div
          className="dropdown-container"
          onMouseOver={handleKostenMouseOver}
          onMouseLeave={handleKostenMouseLeave}
          onClick={handleKostenClick}
        >
          <img src={Kosten} alt="dropdown" />
          {kostenOpen && (
            <div className="dropdown-menu">
              {HashKosten.map((item, index) => (
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
        </div>

        <div
          className="dropdown-container"
          onMouseOver={handleSprachenMouseOver}
          onMouseLeave={handleSprachenMouseLeave}
          onClick={handleSprachenClick}
        >
          <img src={Sprachen} alt="dropdown" />
          {sprachenOpen && (
            <div className="dropdown-menu">
              {HashSprachen.map((item, index) => (
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
        </div>

        <div
          className="dropdown-container"
          onMouseOver={handleBarrierefreiheitMouseOver}
          onMouseLeave={handleBarrierefreiheitMouseLeave}
          onClick={handleBarrierefreiheitClick}
        >
          <img src={Barrierefreiheit} alt="dropdown" />
          {barrierefreiheitOpen && (
            <div className="dropdown-menu">
              {HashBarrierefreiheit.map((item, index) => (
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
        </div>
      </div>
      <div>
        Deine Fiter sind:{" "}
        {selectedValues.map((item, index) => (
          <div key={index}>{item}</div>
        ))}{" "}
      </div>

      <img
        src={location}
        alt="location"
        className="image-responsive"
        style={{ paddingTop: "20px", paddingBottom: "20px", width: "50%" }}
      />
      {error && <div>Error: {error}</div>}
      {loading && <div>Loading...</div>}
      {!error && !loading && data.items.length > 0 && (
        <>
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
                  {item.fields.hashtag.map((hashtag, index) => (
                    <span key={index}>{hashtag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </>
      )}
      {!error && !loading && data.items.length === 0 && (
        <div>No results found.</div>
      )}
    </>
  );
};
export default AngeboteMoaFinder;
