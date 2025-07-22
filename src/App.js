import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageContainer from "./components/LandingPageContainer";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import About from "./components/About";
import ComingSoon from "./components/ComingSoon";
import Moafinder from "./components/Moafinder";
import Festival from "./components/Festival";
import AngeboteMoaFinderSharable from "./components/molecules/AngeboteMoaFinderSharable";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPageContainer />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/about" element={<About />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/moafinder" element={<Moafinder />} />
          <Route path="/festival" element={<Festival />} />
          <Route path="/share/:id" element={<AngeboteMoaFinderSharable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
