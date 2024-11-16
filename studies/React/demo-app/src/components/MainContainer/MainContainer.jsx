import "./MainContainer.css"
import React from "react";
import Head from "../Head/Head.jsx";
import Recipe from "../Recipe/Recipe.jsx";


const mainContainer = () => {
    return (
        <div className = "mainContainer">
            IT'S ME, CONTAINER!
            <Head/>
            <Recipe/>
        </div>
    ) 
}

export default mainContainer