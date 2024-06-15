import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "~assets/css/index.css";
import { App } from "~components/components";
import { AppRoute } from "~enums/enums";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="jazz">
      <Routes>
        <Route path={AppRoute.ROOT} element={<App />} />
        <Route path={AppRoute.PRODUCTS_$ID} element={<App />} />
        <Route path={AppRoute.CHECKOUT} element={<App />} />
        <Route path={AppRoute.CONTACT} element={<App />} />
        <Route path={AppRoute.SOCIAL_NEWS} element={<App />} />
        <Route path={AppRoute.ANY} element={<Navigate to={AppRoute.ROOT} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
