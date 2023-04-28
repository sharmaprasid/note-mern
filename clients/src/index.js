import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./index.css";

import App from "./App";
axios.defaults.baseURL = "https://note-app-djcu.onrender.com";

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
