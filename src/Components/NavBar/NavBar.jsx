import React, { useEffect, useState } from "react";
import "../../Style/navbar.css";
import imageAdmin from "../../NavbarImages/imageAdmin.png";
import imageRasul from "../../assets/pictures/imageRasul.jpg"; // Rasul's profile image
import imageZibeyde from "../../assets/pictures/imageZibeyde.jpg"; // Zibeyde's profile image
import imageNazifa from "../../assets/pictures/imageNazifa.jpg"; // Nazifa's profile image
import imageDashboard from "../../NavbarImages/imageDashboard.png";
import imageProducts from "../../NavbarImages/imageProducts.png";
import imageRestaurants from "../../NavbarImages/imageRestaurants.png";
import imageCategory from "../../NavbarImages/imageCategory.png";
import imageOrders from "../../NavbarImages/imageOrders.png";
import imageHistory_offer from "../../NavbarImages/imageHistory_offer.png";
import imageLogout from "../../NavbarImages/imageLogout.png";
import imageHamburger from "../../NavbarImages/imageHamburger.png";
import backNav from "../../NavbarImages/backNav.png";
import { useLocation, Link } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import Form from "../form/Form";
import axios from "axios";

function NavBar() {
  const location = useLocation();
  const [showSideBar, setShowSideBar] = useState(false);
  const [hamburgerMenuStyle, setHamburgerMenuStyle] = useState({});
  const [fullName, setFullName] = useState("Admin"); // Default olaraq "Admin" göstərilir
  const [profileImage, setProfileImage] = useState(imageAdmin)

  // GET RESTAURANT TYPES FOR ADDPRODUCT SELECT OPTIONS
  const [resturantTypes, setResturantTypes] = useState([]);

  useEffect(() => {
    const getRestaurantType = async () => {
      const resturantUrl = `https://test-foody-admin-default-rtdb.firebaseio.com/restaurants.json`;
      try {
        const response = await axios.get(resturantUrl);
        const data = response.data;
        const types = [...new Set(Object.values(data).map((item) => item.name))];
        setResturantTypes(types);
        console.log(types, "typedata");
      } catch (error) {
        console.log("error");
      }
    };
    getRestaurantType();
  }, []);

  // localStorage-dan tam adı oxumaq üçün useEffect
  useEffect(() => {
    const storedFullName = localStorage.getItem("fullName");
    const storedEmail = localStorage.getItem("email");
    const storedProfileImage = localStorage.getItem("profileImage");
    setProfileImage(storedProfileImage || imageAdmin);

    if (storedFullName) {
      setFullName(storedFullName);
    }

    if (storedEmail) {
      switch (storedEmail) {
        case "garavaliyevrasul531@gmail.com":
          setProfileImage(imageRasul);
          break;
        case "zibeydeceferli@gmail.com":
          setProfileImage(imageZibeyde);
          break;
        case "nazifagojayeva@gmail.com":
          setProfileImage(imageNazifa);
          break;
        default:
          setProfileImage(imageAdmin);
      }
    }

  }, []);

  const objectWithSchema = {
    data: {
      image: "",
      name: "",
      description: "",
      price: "",
      restaurant: "",
    },
    schema: {
      image: { type: "text", label: "Image" },
      name: { type: "text", label: "Name" },
      description: { type: "textarea", label: "Description" },
      price: { type: "number", label: "Price" },
      restaurant: {
        type: "select",
        label: "Restaurants",
        options: resturantTypes.map((type) => ({
          value: type,
          content: type,
        })),
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

  const openHamburgerMenu = () => {
    setHamburgerMenuStyle({
      display: "block",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      zIndex: 999,
      margin: 0,
      borderRadius: 0,
    });
  };

  const closeHamburgerMenu = () => {
    setHamburgerMenuStyle({
      display: "none",
    });
  };

  return (
    <>
      <div className="navHead">
        <div className="hamburgText">
          <button className="hamburgBtn" onClick={() => openHamburgerMenu()}>
            <img src={imageHamburger} alt="Hamburger Menu" />
          </button>
          <h1 className="headTxt">Foody</h1>
        </div>
        <div className="navBtns">
          <button className="addProductBtn" onClick={openSideBar}>
            <span className="addProductBtnSpan">+</span>
            <span className="addBtnTxt">ADD PRODUCT</span>
          </button>
          <SideBar Show={showSideBar} onClose={closeSideBar}>
            <Form
              objectWithSchema={objectWithSchema}
              title="Add Product"
              upload="your product"
              subtitle="Add your Product description and necessary information"
              page="Create Product"
              formType="addProductToFirebase"
              onClose={closeSideBar}
            />
          </SideBar>
          <div className="imgAdmin">
          <img src={profileImage} alt="Admin" />
            <span className="nameAdmin">{fullName}</span> {/* Tam adı göstəririk */}
          </div>
        </div>
      </div>
      <div className="nav" style={hamburgerMenuStyle}>
        <div className="backNavTxt">
          <button className="backNavBtn" onClick={() => closeHamburgerMenu()}>
            <img src={backNav} alt="Back Navigation" />
            <h2>Foody</h2>
          </button>
        </div>
        <ul className="listNav">
          <li>
            <Link
              className={`navLink ${location.pathname === "/dashboardPage" ? "activeLink" : ""}`}
              to="/dashboardPage"
            >
              <img src={imageDashboard} alt="Dashboard" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className={`navLink ${location.pathname === "/productPage" ? "activeLink" : ""}`}
              to="/productPage"
            >
              <img src={imageProducts} alt="Products" />
              Products
            </Link>
          </li>
          <li>
            <Link
              className={`navLink ${location.pathname === "/restaurantsPage" ? "activeLink" : ""}`}
              to="/restaurantsPage"
            >
              <img src={imageRestaurants} alt="Restaurants" />
              Restaurants
            </Link>
          </li>
          <li>
            <Link
              className={`navLink ${location.pathname === "/categoryPage" ? "activeLink" : ""}`}
              to="/categoryPage"
            >
              <img src={imageCategory} alt="Category" />
              Category
            </Link>
          </li>
          <li>
            <Link
              className={`navLink ${location.pathname === "/ordersPage" ? "activeLink" : ""}`}
              to="/ordersPage"
            >
              <img src={imageOrders} alt="Orders" />
              Orders
            </Link>
          </li>
          <li>
            <Link
              className={`navLink ${location.pathname === "/orderHistoryPage" ? "activeLink" : ""}`}
              to="/orderHistoryPage"
            >
              <img src={imageHistory_offer} alt="Order History" />
              History
            </Link>
          </li>
          <li>
            <Link
              className={`navLink ${location.pathname === "/offerPage" ? "activeLink" : ""}`}
              to="/offerPage"
            >
              <img src={imageHistory_offer} alt="Offers" />
              Offer
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/">
              <img src={imageLogout} alt="Logout" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
