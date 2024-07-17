import React, { useState } from 'react'
import Style from '../../Style/subnavrestaurants.css'
import SideBar from '../sideBar/SideBar';
import Form from '../form/Form';


function SubNavBarRestaurants() {

    const [showSideBar, setShowSideBar] = useState(false);


    const objectWithSchema = {
        data: {
            image: "",
            name: "",
            cuisine: "",
            deliveryPrice: "",
            deliveryMin: "",
            address: "",
            category: "",
        },
        schema: {
            image: { type: "text", label: "Image" },
            name: { type: "text", label: "Name" },
            cuisine: { type: "textarea", label: "Cuisine" },
            deliveryPrice: { type: "number", label: "Delivery Price" },
            deliveryMin: { type: "number", label: "Delivery Min" },
            address: { type: "text", label: "Address" },
            category: {
                type: "select",
                label: "Category",
                options: [
                    { value: "fastFood", content: "Fast Food" },
                    { value: "italian", content: "Italian" },
                ],
            },
        },
    };

    const openSideBar = () => {
        setShowSideBar(true);
        document.body.style.overflow = "hidden";
    };

    const closeSideBar = () => {
        setShowSideBar(false);
        document.body.style.overflow = "auto";
    };

    return (
        <div>
            <div className='sub-nav'>
                <div className='sub-nav-left'>
                    <h2>Restaurants</h2>
                </div>
                <div className='sub-nav-right'>
                    <form action="">
                        <select name="restaurants-category" className='form' id="restaurants-category">
                            <option value="category">Category type</option>
                            <option value="Fast-Food">Fast Food</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Doner">Doner</option>
                            <option value="Kebab">Kebab</option>
                            <option value="Roll">Roll</option>
                            <option value="Soup">Soup</option>
                            <option value="Sea-Food">Sea Food</option>
                            <option value="Chinese">Chinese</option>
                        </select>
                    </form>
                    <button className='res-btn' onClick={openSideBar}>+ ADD RESTAURANTS</button>
                    <SideBar Show={showSideBar} onClose={closeSideBar}>
                        <Form
                            objectWithSchema={objectWithSchema}
                            title="Add Restaurants"
                            subtitle="Add your Restaurants Information"
                            onClose={closeSideBar}
                        />
                    </SideBar>
                </div>
            </div>
        </div>
    )
}

export default SubNavBarRestaurants