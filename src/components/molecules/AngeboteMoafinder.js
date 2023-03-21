import React, { useState, useEffect } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import "../styles.css";
import "./../atoms/styles-atoms.css";
import ReplaceLineBreakChar from "../atoms/ReplaceLineBreakChar";
import TextBox from "../atoms/TextBox";
import Dropdown from "../atoms/Dropdown";

// graphics imports
import searchButton from "../../assets/Suche.svg";
import location from "../../assets/location.png";
import Angebotstyp from "../../assets/Angebotstyp.svg";
import Gruppen from "../../assets/Gruppen.svg";
import Orte from "../../assets/Orte.svg";
import Kosten from "../../assets/Kosten.svg";
import Sprachen from "../../assets/Sprachen.svg";
import Barrierefreiheit from "../../assets/Barrierefreiheit.svg";
import Share from "../../assets/share.png";
import Placeholder from "../../assets/placeholder-moafinder.png";
import Copy from "../../assets/copy.png";

const AngeboteMoaFinder = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ items: [] });
  const [photoMap, setPhotoMap] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [hashTagList, setHashTagList] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [allData, setAllData] = useState({ items: [] });
  const [searchHashtags, setSearchHashtags] = useState();
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [activeShareMenu, setActiveShareMenu] = useState(null);

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

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://cdn.contentful.com/spaces/qqdjjpwbe10z/environments/master/entries?access_token=ipuI0QhJrxpOc7c2Y6nK5wUOozD0vEF5_KLtKomPQjo&content_type=angeboteHashtags"
      )
      .then((res) => {
        setSearchHashtags(res.data.items[0].fields);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleImageClick = (imageId) => {
    setSelectedImageId(imageId);
  };

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

  // close the sharing menu by clicking somewhere on the screen
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".share-menu-container")) {
        setActiveShareMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const HashAngebotstyp =
    searchHashtags && searchHashtags.angebotstyp
      ? searchHashtags.angebotstyp
      : [];

  const HashGruppen =
    searchHashtags && searchHashtags.gruppen ? searchHashtags.gruppen : [];

  const HashOrte =
    searchHashtags && searchHashtags.orte ? searchHashtags.orte : [];

  const HashKosten =
    searchHashtags && searchHashtags.kosten ? searchHashtags.kosten : [];

  const HashSprachen =
    searchHashtags && searchHashtags.sprachen ? searchHashtags.sprachen : [];

  const HashBarrierefreiheit =
    searchHashtags && searchHashtags.barrierefreiheit
      ? searchHashtags.barrierefreiheit
      : [];

  const hashtagCategories = [
    { category: "Angebotstyp", hashtags: HashAngebotstyp, color: "#ED7782" },
    { category: "Gruppen", hashtags: HashGruppen, color: "#662382" },
    { category: "Orte", hashtags: HashOrte, color: "green" },
    { category: "Kosten", hashtags: HashKosten, color: "#0099A8" },
    { category: "Sprachen", hashtags: HashSprachen, color: "#7CB92C" },
    {
      category: "Barrierefreiheit",
      hashtags: HashBarrierefreiheit,
      color: "#0099A8",
    },
  ];

  // handle click on dropdown item
  const handleAngebotstypItemClick = (event) => {
    // prevent event from bubbling up to parent element
    event.stopPropagation();
  };

  // Gruppen
  // handle click on dropdown item
  const handleGruppenItemClick = (event) => {
    // prevent event from bubbling up to parent element
    event.stopPropagation();
  };

  // Orte
  // handle click on dropdown item
  const handleOrteItemClick = (event) => {
    // prevent event from bubbling up to parent element
    event.stopPropagation();
  };
  // Kosten
  // handle click on dropdown item
  const handleKostenItemClick = (event) => {
    // prevent event from bubbling up to parent element
    event.stopPropagation();
  };
  // Sprachen
  // handle click on dropdown item
  const handleSprachenItemClick = (event) => {
    // prevent event from bubbling up to parent element
    event.stopPropagation();
  };
  // Barrierefreiheit
  // handle click on dropdown item
  const handleBarrierefreiheitItemClick = (event) => {
    // prevent event from bubbling up to parent element
    event.stopPropagation();
  };

  const handleCopyToClipboard = () => {
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  // Controls the text search input element
  const handleSearchTextChange = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);

    let filteredData = allData.items.filter((item) => {
      const fields = Object.values(item.fields);
      const textToSearch = fields.join(" ").toLowerCase();
      return textToSearch.includes(inputText.toLowerCase());
    });

    setData({ items: filteredData });
  };

  // Control search field background
  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  // Indicates the search engine
  const handleMouseEnter = () => {
    setInputFocused(true);
  };

  const handleMouseLeave = () => {
    if (!searchText) {
      setInputFocused(false);
    }
  };

  // controls the behaviour of social media sharing button click
  const handleShareMenuToggle = (index) => {
    if (activeShareMenu === index) {
      setActiveShareMenu(null);
    } else {
      setActiveShareMenu(index);
    }
  };

  return (
    <>
      <div className="moafinder-container">
        <div className="moafinder-info">
          <div>
            <TextBox
              titlePink="MoaFinder:"
              title="Angebote in Moabit für ein aktives Miteinander"
              text="Ihr habt Lust auf Töpfern, wollt im Chor singen oder sucht ein Beratungscafé? Sport, ein Friedensgebet und ein Sprachkurs würden euch helfen? Hier findet Ihr viele Orte und Angebote in Moabit.
"
            ></TextBox>
          </div>
        </div>
      </div>

      <img
        src={location}
        alt="location"
        className="image-responsive"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      />

      <div className="search-container">
        <Dropdown
          name={HashAngebotstyp}
          onItemSelect={selectedValues}
          onItemClick={handleAngebotstypItemClick}
          handleCheckboxChange={handleCheckboxChange}
        >
          <img src={Angebotstyp} alt="dropdown" />
        </Dropdown>
        <Dropdown
          name={HashGruppen}
          onItemSelect={selectedValues}
          onItemClick={handleGruppenItemClick}
          handleCheckboxChange={handleCheckboxChange}
        >
          <img src={Gruppen} alt="dropdown" />
        </Dropdown>

        <Dropdown
          name={HashOrte}
          onItemSelect={selectedValues}
          onItemClick={handleOrteItemClick}
          handleCheckboxChange={handleCheckboxChange}
        >
          <img src={Orte} alt="dropdown" />
        </Dropdown>

        <Dropdown
          name={HashKosten}
          onItemSelect={selectedValues}
          onItemClick={handleKostenItemClick}
          handleCheckboxChange={handleCheckboxChange}
        >
          <img src={Kosten} alt="dropdown" />
        </Dropdown>

        <Dropdown
          name={HashSprachen}
          onItemSelect={selectedValues}
          onItemClick={handleSprachenItemClick}
          handleCheckboxChange={handleCheckboxChange}
        >
          <img src={Sprachen} alt="dropdown" />
        </Dropdown>

        <Dropdown
          name={HashBarrierefreiheit}
          onItemSelect={selectedValues}
          onItemClick={handleBarrierefreiheitItemClick}
          handleCheckboxChange={handleCheckboxChange}
        >
          <img src={Barrierefreiheit} alt="dropdown" />
        </Dropdown>
      </div>

      <input
        type="text"
        className={`search-input ${inputFocused ? "focused" : ""}`}
        placeholder=""
        value={searchText}
        onChange={handleSearchTextChange}
        onFocus={handleInputFocus}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onBlur={handleInputBlur}
        style={{
          backgroundImage: inputFocused ? "" : `url(${searchButton})`,
        }}
      />

      <div className="search-filter">
        {selectedValues &&
          selectedValues.map((hashtag, index) => {
            const category = hashtagCategories.find((c) =>
              c.hashtags.includes(hashtag)
            );
            return (
              /*
                        marginRight controls the white gap horizontally
                        padding (top/bottom left/right) controls the size of each hashtag incl. background color
                        marginBottom controls the white gap vertically
                        */
              <div
                key={index}
                style={{
                  backgroundColor: category ? category.color : null,
                  marginRight: index !== selectedValues - 1 ? "18px" : "0px",
                  padding: "5px 5px",
                  marginBottom: "15px",
                }}
              >
                {hashtag}
              </div>
            );
          })}
      </div>

      {error && <div>Error: {error}</div>}
      {loading && <div>Loading...</div>}
      {!error && !loading && data.items.length > 0 && (
        <>
          {data.items.map((item, index) => {
            var sharableUrl = `https://moabit.world/share/${item.sys.id}`;

            return (
              <div className="offer-wrapper" key={index}>
                <div className="title-stripe">
                  <div className="title-stripe-share">
                    <div>{item.fields.title}</div>

                    <div className="share-menu-container">
                      <div
                        className="share-menu-toggle"
                        onMouseEnter={() => handleShareMenuToggle(index)} // Pass the index here
                        onClick={() => handleShareMenuToggle(index)}
                      >
                        <img src={Share} alt="Share" />
                      </div>
                      {activeShareMenu === index && ( // Check if the active share menu is equal to the current index
                        <div
                          className="share-menu"
                          onMouseLeave={() => handleShareMenuToggle(index)} // Pass the index here
                        >
                          <CopyToClipboard
                            text={sharableUrl}
                            onCopy={handleCopyToClipboard}
                          >
                            <div className="share-menu-option">
                              <img src={Copy} alt="copy" />
                              {copySuccess && (
                                <span className="copy-success-message">
                                  Link copied to clipboard!
                                </span>
                              )}
                            </div>
                          </CopyToClipboard>
                          <FacebookShareButton url={sharableUrl}>
                            <div className="share-menu-option">
                              <FacebookIcon size={36} round />
                            </div>
                          </FacebookShareButton>
                          <WhatsappShareButton url={sharableUrl}>
                            <div className="share-menu-option">
                              <WhatsappIcon size={36} round />
                            </div>
                          </WhatsappShareButton>
                          <TelegramShareButton url={sharableUrl}>
                            <div className="share-menu-option">
                              <TelegramIcon size={36} round />
                            </div>
                          </TelegramShareButton>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>{item.fields.subtitle}</div>
                </div>
                <div className="offer-divider">
                  <div className="offer-left">
                    <div>
                      <ReplaceLineBreakChar
                        text={item.fields.shortDescription}
                      />
                      <br />
                      <ReplaceLineBreakChar
                        text={item.fields.furtherInformation}
                      />

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
                                e.target.src = { Placeholder };
                              }}
                              onClick={() => handleImageClick(photo.sys.id)}
                            />
                          ))}
                        </div>
                      )}

                      <div
                        className="time-location"
                        style={{ fontWeight: "bold" }}
                      >
                        <ReplaceLineBreakChar text={item.fields.placeAddress} />
                        <br />
                        <ReplaceLineBreakChar text={item.fields.timeLocation} />

                        <div>{item.fields.contact}</div>
                      </div>
                    </div>
                  </div>
                  <div className="offer-right">
                    {item.fields.hashtag &&
                      item.fields.hashtag.map((hashtag, index) => {
                        const category = hashtagCategories.find((c) =>
                          c.hashtags.includes(hashtag)
                        );
                        return (
                          /*
                        marginRight controls the white gap horizontally
                        padding (top/bottom left/right) controls the size of each hashtag incl. background color
                        marginBottom controls the white gap vertically
                        */
                          <span
                            key={index}
                            style={{
                              backgroundColor: category ? category.color : null,
                              marginRight:
                                index !== item.fields.hashtag.length - 1
                                  ? "18px"
                                  : "0px",
                              padding: "5px 5px",
                              marginBottom: "15px",
                            }}
                          >
                            {hashtag}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
      {!error && !loading && data.items.length === 0 && (
        <div style={{ color: "#0099A8", fontSize: "2rem", marginTop: "2rem" }}>
          Nichts gefunden!
        </div>
      )}
      {selectedImageId && (
        <div className="modal">
          <div className="modal-content">
            <img src={photoMap[selectedImageId]} alt="Selected Angebot" />
            <button onClick={() => setSelectedImageId(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
export default AngeboteMoaFinder;
