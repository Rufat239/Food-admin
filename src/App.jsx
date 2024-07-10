import React from "react";
import DashboardPage from "./Pages/DashboardPage";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./Style/app.css";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/dashboardPage" element={<DashboardPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
