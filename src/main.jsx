import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { H } from "highlight.run";
import { ErrorBoundary } from "@highlight-run/react";

// Initalization of the highlight.io for the monitoring purposes
H.init(import.meta.env.VITE_HIGHLIGHT_RUN_ID, {
  serviceName: "glx-blue-ocean-analytics",
  //Specifies where the backend of the app lives. As it is 'true', all requests to the current domain will be matched.
  tracingOrigins: true,
  //Specifies how and what Highlight records from network requests and responses.
  networkRecording: {
    //Enables recording of network requests. The data includes the URLs, the size of the request, and how long the request took.
    enabled: true,
    //This enables recording XMLHttpRequest and Fetch headers and bodies.
    recordHeadersAndBody: true,
    //Insert full or partial urls that we don't want to record here
    urlBlocklist: [],
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);