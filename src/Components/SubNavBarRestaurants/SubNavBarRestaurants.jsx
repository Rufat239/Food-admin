import React, { useEffect, useState } from 'react';
import Style from '../../Style/subnavrestaurants.css';
import SideBar from '../sideBar/SideBar';
import Form from '../form/Form';
import axios from 'axios';




function SubNavBarRestaurants({ addRestaurant, onCategoryChange }) {

    const [showSideBar, setShowSideBar] = useState(false);
    const [categoryType, setCategoryType] = useState([])



    // FOR GET CATEGORY TYPE

    useEffect(() => {
        const getCategoryType = async () => {
            const categoryUrl = `https://test-foody-admin-default-rtdb.firebaseio.com/categories.json`

            try {
                const { data } = await axios.get(categoryUrl)
                const types = Object.values(data).map((x) => x.name)
                setCategoryType(types)

            } catch (error) {
                console.log("error")
            }
        }
        getCategoryType()
    }, [])



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
                options: categoryType.map((type) => ({
                    value: type,
                    content: type
                }))
            },
        },
    };

    // FOR FILTERED RESTAURANT
    const [selectedCategory, setSelectedCategory] = useState("all")
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
                            {categoryType.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>))}
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
                            page="Create Restaurant"
                        />
                    </SideBar>
                </div>
            </div>
        </div>
    )
}
export default SubNavBarRestaurants;