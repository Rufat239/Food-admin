import React from "react";
import DashboardPage from "./Pages/DashboardPage";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./Style/app.css";
import RestaurantsPage from "./Pages/RestaurantsPage";
import OfferPage from "./Pages/OfferPage";
import CategoryPage from "./Pages/CategoryPage";
import OrderHistoryPage from "./Pages/OrderHistoryPage";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/dashboardPage" element={<DashboardPage />} />
            <Route path="/restaurantsPage" element={<RestaurantsPage />} />
            <Route path="/offerPage" element={<OfferPage />} />
            <Route path="/categoryPage" element={<CategoryPage />} />
            <Route path="/orderHistoryPage" element={<OrderHistoryPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
