import React, { useEffect, useState } from "react";
import Goback from "../../common/Goback";
import axios from "axios";

interface SidebarProps {
    isCollapsed: boolean;
    toggleSidebar: () => void;
}

interface ChatSummary {
    endTime: string;
    summ_answer: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
    const [chatSummary, setChatSummary] = useState<ChatSummary | null>(null);

    useEffect(() => {
        const fetchChatSummary = async () => {
            try {
                const response = await axios.get('http://localhost:8080/chat/chat-record');
                setChatSummary(response.data);
            } catch (error) {
                console.error('채팅 요약 불러오기 오류:', error);
            }
        };

        fetchChatSummary();
    }, []);

    return (
        <>
            <Goback where={"채팅"} />
            <div className={`pc-chat-sidebar ${isCollapsed ? "collapsed" : ""}`}>
                {!isCollapsed && chatSummary && (
                    <div className={"pc-chat-body"}>
                        <div className={"chat-summary-header"}>
                            <span>{new Date(chatSummary.endTime).toLocaleDateString()}</span>
                        </div>
                        <div className={"chat-summary-content"}>
                            {chatSummary.summ_answer}
                        </div>
                    </div>
                )}
            </div>
            <div className={"pc-chat-sidebar-btn"}>
                <img
                    src={"/img/spreadbtn.png"}
                    alt={""}
                    onClick={toggleSidebar}
                    style={{ cursor: "pointer" }}
                />
                <img
                    src={"/img/write.png"}
                    alt={""}
                    style={{
                        cursor: "pointer",
                        position: "absolute",
                        left: isCollapsed ? '4vw' : '17vw',
                        bottom: "0.2vh",
                        transition: "left 0.3s ease"
                    }}
                />
            </div>
        </>
    );
};

export default Sidebar;
