import "./App.css";
import React from "react";
import LandingPage from "./components/LandingPage";
import Info from "./components/Info";
import Links from "./components/Links";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Info />
      <Links />
    </div>
  );
}

export default App;
