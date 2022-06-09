import "./App.css";
import React from "react";
import LandingPage from "./components/LandingPage";
import Info from "./components/Info";
import Links from "./components/Links";
import Angebote from "./components/Angebote";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Info />
      <Links />
      <Angebote />
      <Footer />
    </div>
  );
}

export default App;
