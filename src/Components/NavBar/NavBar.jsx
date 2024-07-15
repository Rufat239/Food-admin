import React, { useState } from "react";
import "../../Style/navbar.css";
import imageAdmin from "../../NavbarImages/imageAdmin.png";
import imageDashboard from "../../NavbarImages/imageDashboard.png";
import imageProducts from "../../NavbarImages/imageProducts.png";
import imageRestaurants from "../../NavbarImages/imageRestaurants.png";
import imageCategory from "../../NavbarImages/imageCategory.png";
import imageOrders from "../../NavbarImages/imageOrders.png";
import imageHistory_offer from "../../NavbarImages/imageHistory_offer.png";
import imageLogout from "../../NavbarImages/imageLogout.png";
import imageHamburger from "../../NavbarImages/imageHamburger.png";
import backNav from "../../NavbarImages/backNav.png";
import { Link } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import Form from "../form/Form";
import zIndex from "@mui/material/styles/zIndex";
import { borderRadius, display, margin } from "@mui/system";

function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);

  const [hamburgerMenuStyle, setHamburgerMenuStyle] = useState({});

  const objectWithSchema = {
    data: {
      image: "",
      name: "",
      description: "",
      price: "",
      restaurants: "",
    },
    schema: {
      image: { type: "text", label: "Image" },
      name: { type: "text", label: "Name" },
      description: { type: "textarea", label: "Description" },
      price: { type: "number", label: "Price" },
      restaurants: {
        type: "select",
        label: "Restaurants",
        options: [
          { value: "fastFood", content: "Papa John's" },
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
            <img src={imageHamburger} alt="" />
          </button>
          <h1 className="headTxt">Foody</h1>
        </div>

        <div className="navBtns">
          <button className="addProductBtn" onClick={openSideBar}>
            + <span className="addBtnTxt">ADD PRODUCT</span>
          </button>
          <SideBar Show={showSideBar} onClose={closeSideBar}>
            <Form
              objectWithSchema={objectWithSchema}
              title="Add Product"
              subtitle="Add your Product description and necessary information"
              onClose={closeSideBar}
            />
          </SideBar>
          <button className="btnLang">LANG</button>
          <div className="imgAdmin">
            <img src={imageAdmin} />
            <span className="nameAdmin">Admin</span>
          </div>
        </div>
      </div>

      <div className="nav" style={hamburgerMenuStyle}>
        <div className="backNavTxt">
          <button className="backNavBtn" onClick={() => closeHamburgerMenu()}>
            <img src={backNav} alt="" />
            <h2>Foody</h2>
          </button>
        </div>
        <ul className="listNav">
          <li>
            <Link className="navLink" to="/dashboardPage">
              <img src={imageDashboard} alt="" />
              Dashboard
            </Link>
          </li>

          <li>
            <Link className="navLink" to="/productPage">
              <img src={imageProducts} alt="" />
              Products
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/restaurantsPage">
              <img src={imageRestaurants} alt="" />
              Restaurants
            </Link>
          </li>

          <li>
            <Link className="navLink" to="/categoryPage">
              <img src={imageCategory} alt="" />
              Category
            </Link>
          </li>

          <li>
            <Link className="navLink" to="/ordersPage">
              <img src={imageOrders} alt="" />
              Orders
            </Link>
          </li>

          <li>
            <Link className="navLink" to="/orderHistoryPage">
              <img src={imageHistory_offer} alt="" />
              History
            </Link>
          </li>

          <li>
            <Link className="navLink" to="/offerPage">
              <img src={imageHistory_offer} alt="" />
              Offer
            </Link>
          </li>

          <li>
            <Link className="navLink">
              <img src={imageLogout} alt="" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
