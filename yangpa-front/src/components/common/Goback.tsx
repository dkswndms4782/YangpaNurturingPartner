import React from "react";
import {useNavigate} from "react-router-dom";

interface GobackProps {
    where: string;
}

const Goback: React.FC<GobackProps> = ({where}) => {

    const navigate = useNavigate();

    return (
        <div style={{padding: "0.7rem", paddingBottom: "0rem", position: "absolute", zIndex: 30}}>
            <img src={"/img/backIcon.png"} title={"뒤로가기"} alt="뒤로가기"
                 style={{width: "0.8rem", marginRight: "1rem", cursor: "pointer"}}
                 onClick={() => navigate(-1)}/>
            <span style={{fontSize: "2.2rem", fontWeight: "bold", marginRight: "0.5rem"}}>{where}</span>
            <img src={"/img/Help.png"} alt="" style={{width: "1.4rem"}}/>
        </div>
    );
}

export default Goback;