import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import Home from "./pages/Home";
import Loan from "./pages/Loan";
import auth0Config from "./auth0Config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={auth0Config.authorizationParams}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="loan" element={<Loan />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
