import reportWebVitals from "./reportWebVitals";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { GifExpertApp } from "./GifExpertApp";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
);

reportWebVitals();
