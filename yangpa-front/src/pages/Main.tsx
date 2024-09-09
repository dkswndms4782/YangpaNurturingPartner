import React from 'react';
import {useMediaQuery} from "react-responsive";
import SearchPart from "../components/desktop/main/SearchPart";
import "../css/mainCsss.scss"
import SearchNavigate from "../components/desktop/main/SearchNavigate";

const Main: React.FC = () => {
    const isPortrait = useMediaQuery({query: '(orientation: portrait)'});

    return (
        <div>
            <SearchPart/>

            {
                isPortrait
                    ? <></>
                    : <></>
            }

            <SearchNavigate/>
        </div>
    );
};

export default Main;