import React from "react";
import SubNavCategory from "../Components/Category/SubNavCategory";
import Category from "../Components/Category/Category";
import Navbar from '../Components/NavBar/NavBar'

function CategoryPage() {
  return (
    <div>
      <Navbar/>
      <SubNavCategory />
      <Category />
    </div>
  );
}

export default CategoryPage;
