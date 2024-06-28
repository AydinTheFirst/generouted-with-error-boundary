import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "@generouted/react-router";
import { ReactErrorBoundary } from "./components/ReactErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactErrorBoundary>
      <Routes />
    </ReactErrorBoundary>
  </React.StrictMode>
);
