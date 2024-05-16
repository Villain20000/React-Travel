import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.scss"; // This should match the location and name of your main SCSS file

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
