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
import { Link } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import Form from "../form/Form";

function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);

  const closeSideBar = () => {
    setShowSideBar(false);
  };
  return (
    <>
      <div className="navHead">
        <h1 className="headTxt">Foody</h1>

        <div className="navBtns">
          <button
            className="addProductBtn"
            onClick={() => setShowSideBar(true)}
          >
            + ADD PRODUCT
          </button>
          <button className="btnLang">LANG</button>
          <div className="imgAdmin">
            <img src={imageAdmin} />
            <span className="nameAdmin">Admin</span>
          </div>
        </div>
      </div>

      <div className="nav">
        <ul className="listNav">
          <li>
            <Link className="navLink" to="/">
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
            <Link className="navLink">
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

        <SideBar Show={showSideBar} onClose={closeSideBar}>
          <Form object={{ firstName: "", lastName: "" }} />
        </SideBar>
      </div>
    </>
  );
}

export default NavBar;
