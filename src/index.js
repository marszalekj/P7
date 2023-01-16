import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
} from "react-router-dom";
import App from "./App";
import "../src/style/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
