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
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((val) => val !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const handleSearch = () => {
    let filteredData = allData.items;
    if (selectedValues.length > 0) {
      filteredData = allData.items.filter((item) => {
        if (item.fields.hashtag && Array.isArray(item.fields.hashtag)) {
          const hashtags = item.fields.hashtag.map((h) => h.trim());
          console.log(selectedValues);
          return selectedValues.every((value) => hashtags.includes(value));
        }
        return false;
      });
    }
    setData({ items: filteredData });
  };

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

  // this is deactivated for mouse hover
  /*
  const toggleAngebotstypDropdown = () => {
    console.log("Toggling Angebotstyp dropdown");
    setAngebotstypOpen(!angebotstypOpen);
  };
*/

  const toggleGruppenDropdown = () => {
    console.log("Toggling Gruppen dropdown");
    setGruppenOpen(!gruppenOpen);
  };

  const toggleOrteDropdown = () => {
    console.log("Toggling Orte dropdown");
    setOrteOpen(!orteOpen);
  };

  const toggleKostenDropdown = () => {
    console.log("Toggling Kosten dropdown");
    setKostenOpen(!kostenOpen);
  };

  const toggleSprachenDropdown = () => {
    console.log("Toggling Sprachen dropdown");
    setSprachenOpen(!sprachenOpen);
  };

  const toggleBarrierefreiheitDropdown = () => {
    console.log("Toggling Barrierefreiheit dropdown");
    setBarrierefreiheitOpen(!barrierefreiheitOpen);
  };

  const handleAngebotstypMouseOver = () => {
    setAngebotstypOpen(true);
    console.log("hover works");
  };

  const handleAngebotstypMouseLeave = () => {
    setAngebotstypOpen(false);
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
          onMouseOver={handleAngebotstypMouseOver}
          onMouseLeave={handleAngebotstypMouseLeave}
        >
          <img src={Angebotstyp} alt="dropdown" />
          {angebotstypOpen && (
            <div className="dropdown-menu-hover">
              {HashAngebotstyp.map((item, index) => (
                <label key={index} className="dropdown-menu-item">
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

        <div className="dropdown-container" onClick={toggleGruppenDropdown}>
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

        <div className="dropdown-container" onClick={toggleOrteDropdown}>
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

        <div className="dropdown-container" onClick={toggleKostenDropdown}>
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

        <div className="dropdown-container" onClick={toggleSprachenDropdown}>
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
          onClick={toggleBarrierefreiheitDropdown}
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
                    <span>{hashtag}</span>
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
