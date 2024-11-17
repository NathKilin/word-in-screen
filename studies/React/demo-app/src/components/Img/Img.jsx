import React from "react";
import ImgFile from "./Img.jpeg"; 


function Img() {
return (
    <div>
    <img
        src={ImgFile}
        alt="Image"
        style={{
        maxWidth: "100%",
        borderRadius: "15px",
        }}
    />
    </div>
);}

export default Img;


// - Mobile: 375px
// - Desktop: 1440px