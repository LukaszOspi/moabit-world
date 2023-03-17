import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import "../styles.css";
import "./../atoms/styles-atoms.css";
import ReplaceLineBreakChar from "../atoms/ReplaceLineBreakChar";
import Menu from "./../Menu";
import Footer from "./../Footer";
import Share from "../../assets/share.png";
import Copy from "../../assets/copy.png";

const AngeboteMoaFinderSharable = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ items: [] });
  const [photoMap, setPhotoMap] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [hashTagList, setHashTagList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [allData, setAllData] = useState({ items: [] });
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [searchHashtags, setSearchHashtags] = useState();
  // eslint-disable-next-line no-unused-vars
  const [filteredData, setFilteredData] = useState({ items: [] });
  const [showMenu, setShowMenu] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedValues, setSelectedValues] = useState([]);

  // URL: https://moabit.world/share/123

  const { id } = useParams();

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
        setFilteredData(res.data.items.filter((item) => item.sys.id === id));
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

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
  // controls the behaviour of social media sharing button click

  const handleShareMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleCopyToClipboard = () => {
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  return (
    <>
      <Menu />
      {!error && loading && <div>Loading...</div>}
      {!error && !loading && filteredData && filteredData.length === 0 && (
        <div>No results found.</div>
      )}
      {!error && !loading && data.items && data.items.length > 0 && (
        <>
          {filteredData.map((item, index) => {
            var sharableUrl = `https://moabit.world/share/${item.fields.id}`;
            return (
              <div className="offer-wrapper" key={index}>
                <div className="title-stripe">
                  <div className="title-stripe-share">
                    <div>{item.fields.title}</div>
                    <div className="share-menu-container">
                      <div
                        className="share-menu-toggle"
                        onClick={handleShareMenuToggle}
                      >
                        <img src={Share} alt="Share" />
                      </div>
                      {showMenu && (
                        <div className="share-menu">
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
                                e.target.src = "placeholder-image-url";
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
          <Footer />
        </>
      )}
      {error && <div>Error: {error}</div>}
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

export default AngeboteMoaFinderSharable;
