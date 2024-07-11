import React from "react";
import DashboardPage from "./Pages/DashboardPage";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./Style/app.css";
import RestaurantsPage from "./Pages/RestaurantsPage";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/dashboardPage" element={<DashboardPage />} />
            <Route path="/restaurantsPage" element={<RestaurantsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
