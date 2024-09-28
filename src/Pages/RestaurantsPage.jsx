import React, { useState } from "react";
import SubNavBarRestaurants from "../Components/SubNavBarRestaurants/SubNavBarRestaurants";
import CardRestaurants from "../Components/CardRestaurants/CardRestaurants";
import NavBar from "../Components/NavBar/NavBar";

function RestaurantsPage() {
    const [restaurants, setRestaurants] = useState([])

    const [selectedCategory, setSelectedCategory] = useState("all");

    const addRestaurant = (restaurant) => {
        setRestaurants([...restaurants, { ...restaurant, id: Date.now() }]);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <div className="restaurant-main">
                <NavBar />
                <SubNavBarRestaurants 
                    addRestaurant={addRestaurant} 
                    onCategoryChange={handleCategoryChange} 
                />
                <CardRestaurants 
                    restaurants={restaurants} 
                    selectedCategory={selectedCategory} 
                />
            </div>
        </div>
    );
}

export default RestaurantsPage;

