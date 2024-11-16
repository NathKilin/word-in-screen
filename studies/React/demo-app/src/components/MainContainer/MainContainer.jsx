import React from "react";
import "./MainContainer.css";
import Head from "../Head/Head.jsx";
import Instructions from "../Instructions/Instructions.jsx";
import Img from "../Img/Img.jsx"; 
// ???????????????????????????
import Ingredients from "../Ingredients/Ingredients.jsx";
import Nutrition from "../Nutrition/Nutrition.jsx";

const MainContainer = () => {
return (
    <div className="mainContainer">
    <Img />
    <Head />
    <Ingredients/>
    <Instructions/>
    <Nutrition/>
    </div>
);
};

export default MainContainer;
