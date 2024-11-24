import React from "react";
import "./MainContainer.css";
import Buttons from "../Buttons/Buttons.jsx";
import Star from "../Star/Star.jsx";
import Text from "../Text/Text.jsx";
import ResultComp from "../Buttons/ResultComp.jsx";

const MainContainer = ({
userChoice,
setUserChoice,
didUserSubmited,
setDidUserSubmited,
}) => {
return (
    <div className="mainContainer">
    {didUserSubmited ? (
        <ResultComp userChoice={userChoice} />
    ) : (
        <>
        { bool?<Star /> :<>not</>
}
        <Text />
        <Buttons
            setUserChoice={setUserChoice}
            setDidUserSubmited={setDidUserSubmited}
        />
        </>
    )}
    </div>
)};

export default MainContainer;
