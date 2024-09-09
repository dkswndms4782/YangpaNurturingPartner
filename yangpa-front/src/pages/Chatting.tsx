import React, { useState } from "react";
import Sidebar from "../components/desktop/chat/Sidebar";
import "../css/chatCss.scss";
import ChatContent from "../components/desktop/chat/ChatContent";

const Chatting: React.FC = () => {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

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