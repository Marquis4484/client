import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root")); //ReactDOM.render React 18
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);
