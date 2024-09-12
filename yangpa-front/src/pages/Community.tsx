import React, {useState} from "react";
import Goback from "../components/common/Goback";
import "../css/commCss.scss";
import CommHeader from "../components/desktop/comm/CommHeader";
import {Pagination} from "@mui/material";
import CommContent from "../components/desktop/comm/CommContent";
import CommWrite from "../components/desktop/comm/CommWrite";

const Community: React.FC = () => {

    const [write, setWrite] = useState(false);

    return (
        <div>
            <Goback where={"커뮤니티"}/>
            <div className={"pc-comm-body"}>
                <CommHeader write={write} setWrite={setWrite}/>

                {write
                    ? <CommWrite setWrite={setWrite}/>
                    : <>
                        <CommContent/>

                        <Pagination
                            count={10}
                            color="primary"
                            sx={{marginTop: "3rem"}}
                        />
                    </>
                }
            </div>
        </div>
    );
};

export default Community;