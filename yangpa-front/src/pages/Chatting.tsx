import React, { useState, useEffect } from "react";
import Sidebar from "../components/desktop/chat/Sidebar";
import "../css/chatCss.scss";
import { useMediaQuery } from "react-responsive";
import ChatContent from "../components/desktop/chat/ChatContent";
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Message 타입 정의
interface Message {
  type: 'user' | 'bot' | 'error';
  text: string;
}

const Chatting: React.FC = () => {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const { session_id } = useParams();
    const [query, setQuery] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isChatEnded, setIsChatEnded] = useState(false);
    const [currentSession_id, setCurrentSession_id] = useState<string | null>(session_id || null);

    const toggleSidebar = () => {
        setSidebarCollapsed(prev => !prev);
    };

    const handleNewChat = async () => {
        try {
            const response = await axios.post('http://localhost:8080/chat/start-new-chat');
            const newSession_id = response.data.session_id;
            setCurrentSession_id(newSession_id);
            // 채팅 내용 초기화
            setMessages([]);
            setQuery('');
            setIsChatEnded(false);
        } catch (error) {
            console.error('새로운 채팅 시작 오류:', error);
        }
    };

    const handleEndChat = async () => {
        try {
            await axios.post('http://localhost:8080/chat/end-chat', null, { params: { session_id: currentSession_id } });
            setIsChatEnded(true);
            setMessages(prevMessages => [...prevMessages, { type: 'bot', text: '채팅이 종료되었습니다.' }]);
        } catch (error) {
            console.error('채팅 종료 오류:', error);
        }
    };

    useEffect(() => {
        const checkSession = async () => {
            if (currentSession_id) {
                try {
                    const response = await axios.post('http://localhost:8080/chat/message', {
                        session_id: currentSession_id,
                        chat_detail: {}
                    });
                    if (response.status === 500) {
                        // 세션이 없을 경우 새로운 세션 생성
                        const newResponse = await axios.post('http://localhost:8080/chat/start-new-chat');
                        const newSession_id = newResponse.data.session_id;
                        setCurrentSession_id(newSession_id);
                    }
                } catch (error) {
                    console.error('세션 확인 오류:', error);
                }
            }
        };

        checkSession();
    }, [currentSession_id]);

    return (
        <>
            <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
            <div className={`content-container ${isSidebarCollapsed ? "collapsed" : "expanded"}`}>
                <ChatContent
                    messages={messages}
                    setMessages={setMessages}
                    query={query}
                    setQuery={setQuery}
                    isChatEnded={isChatEnded}
                    handleNewChat={handleNewChat}
                    handleEndChat={handleEndChat} // handleEndChat을 전달합니다
                    session_id={currentSession_id || ''}
                />
            </div>
        </>
    );
};

export default Chatting;
