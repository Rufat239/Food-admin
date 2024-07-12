import React from "react";
import SubNavBarRestaurants from "../Components/SubNavBarRestaurants/SubNavBarRestaurants";
import CardRestaurants from "../Components/CardRestaurants/CardRestaurants";
import NavBar from "../Components/NavBar/NavBar";

function RestaurantsPage() {
  return (
    <div>
      <div className="restaurant-main">
        <NavBar />
        <SubNavBarRestaurants />
        <CardRestaurants />
      </div>
    </div>
  );
}

export default RestaurantsPage;
