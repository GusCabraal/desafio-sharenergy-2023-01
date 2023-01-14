import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { QueryClientProvider } from "react-query";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import { QueryClient } from "react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
