import React, { useState } from "react";
import SubNavBarRestaurants from "../Components/SubNavBarRestaurants/SubNavBarRestaurants";
import CardRestaurants from "../Components/CardRestaurants/CardRestaurants";
import NavBar from "../Components/NavBar/NavBar";

function RestaurantsPage() {
    const [restaurants, setRestaurants] = useState([]);

    const addRestaurant = (restaurant) => {
        setRestaurants([...restaurants, { ...restaurant, id: Date.now() }]);
    };

    return (
        <div>
            <div className="restaurant-main">
                <NavBar />
                <SubNavBarRestaurants addRestaurant={addRestaurant} />
                <CardRestaurants restaurants={restaurants} />
            </div>
        </div>
    );
}

export default RestaurantsPage;
