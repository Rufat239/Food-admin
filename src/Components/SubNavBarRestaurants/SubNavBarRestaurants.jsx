import React, { useState } from 'react';
import Style from '../../Style/subnavrestaurants.css';
import SideBar from '../sideBar/SideBar';
import Form from '../form/Form';
function SubNavBarRestaurants({ addRestaurant,onCategoryChange }) {
    const [showSideBar, setShowSideBar] = useState(false);
    const [formData, setFormData] = useState({
        // image: "",
        name: "",
        cuisine: "",
        deliveryPrice: "",
        deliveryMin: "",
        address: "",
        category: "",
    });
    const objectWithSchema = {
        data: formData,
        schema: {
            // image: { type: "text", label: "Image" },
            name: { type: "text", label: "Name" },
            cuisine: { type: "textarea", label: "Cuisine" },
            deliveryPrice: { type: "number", label: "Delivery Price" },
            deliveryMin: { type: "number", label: "Delivery Min" },
            address: { type: "text", label: "Address" },
            category: {
                type: "select",
                label: "Category",
                options: [
                    { value: "categories", content: "Categories" },
                    { value: "Fast Food", content: "Fast Food" },
                    { value: "Italian", content: "Italian" },
                    { value: "Pizza", content: "Pizza" },
                    { value: "Doner", content: "Doner" },
                    { value: "Kebab", content: "Kebab" },
                    { value: "Roll", content: "Roll" },
                    { value: "Soup", content: "Soup" },
                    { value: "Sea Food", content: "Sea Food" },
                    { value: "Chinese", content: "Chinese" }
                ],
            },
        },
    };

    // FOR FILTERED RESTAURANT
    const [selectedCategory,setSelectedCategory] = useState("all")
    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        onCategoryChange(category); 
    };
    const openSideBar = () => {
        setShowSideBar(true);
        document.body.style.overflow = "hidden";
    };
    const closeSideBar = () => {
        setShowSideBar(false);
        document.body.style.overflow = "auto";
    };
    const handleFormSubmit = (data) => {
        addRestaurant(data);
        closeSideBar();
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleFormSubmit(formData);
        }
    };




    return (
        <div>
            <div className='sub-nav-restaurant'>
                <div className='sub-nav-left'>
                    <h2 className='header-restaurant'>Restaurants</h2>
                    <button className='res-btn-for-responsive' onClick={openSideBar}>+ ADD RESTAURANTS</button>
                </div>
                <div className='sub-nav-right'>
                    <form action="">
                        <select name="restaurants-category" className='formRestaurant' id="restaurants-category" onChange={handleCategoryChange}>
                            <option value="all">All Restaurants</option>
                            <option value="Fast Food">Fast Food</option>
                            <option value="Italian">Italian</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Doner">Doner</option>
                            <option value="Kebab">Kebab</option>
                            <option value="Roll">Roll</option>
                            <option value="Soup">Soup</option>
                            <option value="Sea Food">Sea Food</option>
                            <option value="Chinese">Chinese</option>
                        </select>
                        <div className="select-arrow-restaurant">&#9660;</div>
                    </form>
                    <button className='res-btn' onClick={openSideBar}>+ ADD RESTAURANTS</button>
                    <SideBar Show={showSideBar} onClose={closeSideBar}>
                        <Form
                            objectWithSchema={objectWithSchema}
                            title="Add Restaurants"
                            subtitle="Add your Restaurants Information"
                            onClose={closeSideBar}
                            onSubmit={handleFormSubmit}
                            onKeyPress={handleKeyPress}
                            formType="postRestaurant"
                            buttonText="Create Restaurant"
                        />
                    </SideBar>
                </div>
            </div>
        </div>
    )
}
export default SubNavBarRestaurants;