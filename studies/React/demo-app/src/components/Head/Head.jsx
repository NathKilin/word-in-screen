import "./Head.css"
import React from "react";
import Description from "../Description/Description";
import PrepTime from "../PrepTime/PrepTime";

const head = () => {
    return (
        <div className="head">
            <Description/>
            <PrepTime/>
        </div>
    )
}

export default head


