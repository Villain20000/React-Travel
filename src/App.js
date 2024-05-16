import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Home from "./Pages/Home/Home";
import Destinations from "./Pages/Destinations/Destinations";
import Holidays from "./Pages/Holidays/Holidays";

import CityBreaks from "./Pages/CityBreaks/CityBreaks";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/city-breaks" element={<CityBreaks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
