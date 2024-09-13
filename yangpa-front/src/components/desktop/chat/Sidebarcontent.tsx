import React, { useEffect, useState } from "react";
import axios from "axios";

interface ChatSummary {
    session_id: string;
    end_time: string;
    summ_answer: string;
}

interface SidebarContentProps {
    onSummaryClick: (session_id: string) => void;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ onSummaryClick }) => {
    const [chatSummaries, setChatSummaries] = useState<ChatSummary[]>([]);

    useEffect(() => {
        const fetchChatSummaries = async () => {
            try {
                const user_id = "kim123";

                // 유저 아이디로 세션 아이디를 가져옴
                const sessionIdsResponse = await axios.post('http://localhost:8080/chat/get-userinfo', { user_id });
                const sessionIds = sessionIdsResponse.data;

                console.log("세션아이디:", sessionIds);
                
                if (!sessionIds || sessionIds.length === 0) {
                    console.warn("세션 아이디가 없습니다.");
                    return;
                }

                // 채팅 요약 요청
                const response = await axios.post('http://localhost:8080/chat/chat-record', sessionIds);
                setChatSummaries(response.data); // 최신 정렬된 데이터를 그대로 사용
            } catch (error) {
                console.error('채팅 요약 불러오기 오류:', error);
            }
        };

        fetchChatSummaries();
    }, []);

    return (
        <div className="pc-chat-body">
            {chatSummaries.length > 0 ? (
                chatSummaries.map((summary, index) => (
                    <div key={index} className="chat-summary-item" onClick={() => onSummaryClick(summary.session_id)}>
                        <div className="chat-summary-header">
                            <span>{new Date(summary.end_time).toLocaleDateString()}</span>
                        </div>
                        <div className="chat-summary-content">
                            {summary.summ_answer}
                        </div>
                    </div>
                ))
            ) : (
                <div className="no-records">채팅 기록이 없습니다.</div>
            )}
        </div>
    );
};

export default SidebarContent;
