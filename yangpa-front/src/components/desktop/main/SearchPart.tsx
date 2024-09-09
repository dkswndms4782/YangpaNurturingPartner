import React from "react";
import {useMediaQuery} from "react-responsive";

const SearchPart: React.FC = () => {
    const isPortrait = useMediaQuery({query: '(orientation: portrait)'});


    return (
        <div className={isPortrait ? "ph-hands-img-div" : "pc-hands-img-div"}>
            <img className={isPortrait ? "ph-hands-img" : "pc-hands-img"} src="/img/hands.png" alt={""}/>
        </div>
    )
}

export default SearchPart;