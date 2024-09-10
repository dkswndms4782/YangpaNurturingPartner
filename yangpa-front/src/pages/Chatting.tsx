import React, { useState } from "react";
import Sidebar from "../components/desktop/chat/Sidebar";
import "../css/chatCss.scss";
import {useMediaQuery} from "react-responsive";

const Chatting: React.FC = () => {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
    const isPortrait = useMediaQuery({query: '(orientation: portrait)'});

    const toggleSidebar = () => {
        setSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <>
            <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
            <div
                className={`content-container ${isSidebarCollapsed ? "collapsed" : "expanded"}`}>
                123
            </div>
        </>
    );
};

export default Chatting;
