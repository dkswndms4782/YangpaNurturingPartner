import React from "react";
import Goback from "../components/common/Goback";
import "../css/commCss.scss";
import CommHeader from "../components/desktop/comm/CommHeader";
import {Pagination} from "@mui/material";
import CommContent from "../components/desktop/comm/CommContent";

const Community: React.FC = () => {

    return (
        <div>
            <Goback where={"커뮤니티"}/>
            <div className={"pc-comm-body"}>
                <CommHeader/>

                <CommContent/>

                <Pagination count={10} color="primary"/>
            </div>
        </div>
    );
};

export default Community;