import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorSchemeScript forceColorScheme="light" />
    <MantineProvider forceColorScheme="light">
      <Router>
        <App />
      </Router>
    </MantineProvider>
  </React.StrictMode>
);
