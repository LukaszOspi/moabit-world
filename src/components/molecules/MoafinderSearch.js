import React from "react";
import "../styles.css";
import "../atoms/styles-atoms.css";
import TextBox from "../atoms/TextBox";
import searchButton from "../../assets/search_button.png";
import filter from "../../assets/filter.png";
import location from "../../assets/location.png";
import AngeboteMoafinder from "./AngeboteMoafinder";

const MoafinderSearch = () => {
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
              />
            </button>
          </div>
          <div>
            <TextBox
              title="MoaFinder: Angebote in Moabit fr ein Aktives Miteinander"
              text="Ihr habt Lust auf Töpfern, wollt im Chor singen oder sucht ein Beratungscafé? Sport, ein Friedensgebet und ein Sprachkurs würden euch helfen? Hier findet Ihr viele Orte und Angebote in Moabit.
"
            ></TextBox>
          </div>
        </div>
        <img
          src={filter}
          alt="filter"
          className="image-responsive"
          style={{ paddingTop: "20px", paddingBottom: "20px", width: "100%" }}
        />
        <img
          src={location}
          alt="location"
          className="image-responsive"
          style={{ paddingTop: "20px", paddingBottom: "20px", width: "100%" }}
        />
      </div>
      <AngeboteMoafinder />
    </>
  );
};

export default MoafinderSearch;
