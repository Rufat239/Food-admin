import React, { useEffect, useState } from 'react';
import Editsvg from '../../assets/SVG/edit.svg';
import Deletesvg from '../../assets/SVG/delete.svg';
import Style from '../../Style/cardrestaurants.css';
import getRestaurants from '../../service/restaurant/getAllRestaurants';
import axios from 'axios';
import SideBar from '../sideBar/SideBar';
import Form from '../form/Form';
import DeleteModal from '../DeleteModal/DeleteModal';
import deletedRestaurant from '../../service/restaurant/deleteRestaurant';
import Loading from '../Loading/Loading';



function Restaurants() {
    const [restaurants, setRestaurants] = useState([])
    const [restaurantID, setRestaurantID] = useState("")
    const [loading, setLoading] = useState(false)



    // FOR MODAL
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
                    { value: "Sea food", content: "Sea Food" },
                    { value: "Chinese", content: "Chinese" }
                ],
            },
        },
    };


    //GET RESTAURANTS
    useEffect(() => {
        const getRestaurant = async () => {
            try {
                const data = await getRestaurants();
                console.log(data);
                if (data) {
                    const restaurantsArray = Object.keys(data).map((key) => ({
                        id: key,
                        ...data[key]
                    }));
                    console.log("Formatted Restaurants:", restaurantsArray);
                    setRestaurants(restaurantsArray);
                } else {
                    console.log("No restaurants found");
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(true)
            }
        };
        getRestaurant();

    }, []);
    // // // // //


    // FOR EDIT
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)
    const openSideBar = (restaurant) => {
        setSelectedRestaurant(restaurant);
        setFormData({
            name: restaurant.name,
            cuisine: restaurant.cuisine,
            deliveryPrice: restaurant.deliveryPrice,
            deliveryMin: restaurant.deliveryMin,
            address: restaurant.address,
            category: restaurant.category,
            image: restaurant.url || "",
        });
        setShowSideBar(true);
        document.body.style.overflow = "hidden";
    }


    //DELETE RESTAURANT
    const [deleteResID, setDeleteResID] = useState("")
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    async function deleteRestaurant() {
        setShowDeleteModal(false);

        const success = await deletedRestaurant(deleteResID);
        if (success) {
            setRestaurants((prevRestaurants) => prevRestaurants.filter(res => res.id !== deleteResID));
        } else {
            console.log("error");
        }
    }

    const handleShowDeleteModal = (id) => {
        setDeleteResID(id)
        setShowDeleteModal(true)
    };

    // // // // // //


    // SHOW AND CLOSE MODAL
    const [showSideBar, setShowSideBar] = useState(false);

    const closeSideBar = () => {
        setShowSideBar(false);
        document.body.style.overflow = "auto";
    };
    // // // // // //

    return (
        <div className='all-restaurant-component'>
            <div className='cardListRestaurant'>
                {loading ? (
                    <>
                        {restaurants.length > 0 ? (
                            restaurants.map((restaurant) => (
                                <div className="card-res" key={restaurant.id}>
                                    <div className='cardsRestaurant'>
                                        <div className='cards-image'>
                                            <img src={restaurant.url} alt={restaurant.name} />
                                        </div>
                                        <div className='cards-info'>
                                            <h5>{restaurant.name}</h5>
                                            <p>{restaurant.category}</p>
                                        </div>
                                        <div className='cards-edit'>
                                            <img src={Editsvg} alt="Edit" onClick={() => {
                                                openSideBar(restaurant)
                                                setRestaurantID(restaurant.id)
                                            }} />
                                            <img src={Deletesvg} alt="Delete" onClick={() => handleShowDeleteModal(restaurant.id)} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='emptyRestaurantList'>No restaurants available</p>
                        )}
                        <SideBar Show={showSideBar} onClose={closeSideBar}>
                            <Form
                                objectWithSchema={objectWithSchema}
                                title="Edit Restaurants"
                                subtitle="Edit your Restaurants information"
                                onClose={closeSideBar}
                                buttonText="Update Restaurant"
                                uploadText="Upload your Restaurant image"
                                isEdit={true}
                                restaurantId={restaurantID}
                                formType="updateRestaurant"

                            />
                        </SideBar>
                        {showDeleteModal && <DeleteModal onCancel={() => setShowDeleteModal(false)} deleted={deleteRestaurant} />}
                    </>
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    );
}
export default Restaurants;