import React from "react";

interface GobackProps {
    where: string;
}

const Goback: React.FC<GobackProps> = ({where}) => {
    return (
        <div style={{padding:"0.7rem", paddingBottom:"0rem", position:"absolute", zIndex:30}}>
            <img src={"/img/backIcon.png"} alt="" style={{width: "0.8rem", marginRight:"1rem"}}/>
            <span style={{fontSize: "2.2rem", fontWeight:"bold", marginRight:"0.5rem"}}>{where}</span>
            <img src={"/img/Help.png"} alt="" style={{width: "1.4rem"}}/>
        </div>
    );
}

export default Goback;