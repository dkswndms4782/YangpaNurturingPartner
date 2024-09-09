import React from 'react';
import {useMediaQuery} from "react-responsive";
import SearchPart from "../components/desktop/main/SearchPart";
import "../css/mainCsss.scss"

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
        </div>
    );
};

export default Main;