import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const helloWorld = <h1>Hello World</h1>;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* {helloWorld} */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
