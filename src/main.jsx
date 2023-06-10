import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter basename="/Portfolio">
    <App />
  </BrowserRouter>

  </React.StrictMode>,
  rootElement
);
