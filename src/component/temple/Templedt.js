import React, { useState } from "react";
import Sidebar from "./Sidebar";
import NavbarSign from "../checkoutform/NavbarSign";
import NavigationBar from "../checkoutform/NavigationBar";
import HomeNavbar from "../checkoutform/HomeNavbar";
import Templecard from "./Templecard";
import Temple from "./tmpData";

function Templedt() {
  const [menuData, setMenuData] = useState(Temple);
  const [selectedReview, setSelectedReview] = useState([]);
  const abc = ["1 Reviews"];
  const handleSelect = (item) => {
    const filterData = Temple.filter((e) => {
      console.log("e.review", e.review);
      return selectedReview.includes(e.review);

      // console.log(e.review, item);
      // return e.review === item;
    });
    setMenuData(filterData);
    console.log("item", item);
    console.log("xyz", filterData);
  };

  return (
    <>
      <NavbarSign />
      <NavigationBar />
      <HomeNavbar />
      <Sidebar
        handleSelect={handleSelect}
        setSelectedReview={setSelectedReview}
        Temple={Temple}
        setMenuData={setMenuData}
        menuData={menuData}
      />
      <Templecard menuData={menuData} />
    </>
  );
}

export default Templedt;
