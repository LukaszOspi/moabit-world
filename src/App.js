import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageContainer from "./components/LandingPageContainer";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPageContainer />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
