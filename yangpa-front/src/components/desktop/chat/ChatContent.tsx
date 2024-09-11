import React, { Dispatch, SetStateAction } from "react";
import { TextField, IconButton } from "@mui/material";
import ChatPartDefault from "./ChatPartDefault";
import axios from "axios";

// Message 타입 정의
interface Message {
    type: 'user' | 'bot' | 'error';
    text: string;
}

// Props 타입 정의
interface ChatContentProps {
    messages: Message[];
    setMessages: Dispatch<SetStateAction<Message[]>>;
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
    isChatEnded: boolean;
    handleNewChat: () => void;
    session_id: string;
}

const ChatContent: React.FC<ChatContentProps> = ({ messages, setMessages, query, setQuery, isChatEnded, handleNewChat, session_id }) => {
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (isChatEnded || !session_id) return;

        const userMessage: Message = { type: 'user', text: query };
        setMessages(prevMessages => [...prevMessages, userMessage]);

        try {
            const response = await axios.post('http://localhost:8080/chat/message', {
                session_id,
                chat_detail: { query }
            });
            const botMessage: Message = { type: 'bot', text: response.data.answer };
            setMessages(prevMessages => [...prevMessages, userMessage, botMessage]);
            setQuery('');
        } catch (error) {
            const errorMessage: Message = { type: 'error', text: '오류가 발생했습니다.' };
            setMessages(prevMessages => [...prevMessages, userMessage, errorMessage]);
            console.error('오류 발생:', error);
        }
    };

    return (
        <div className="pc-show-chat">
            <div className="pc-chat-part">
                <ChatPartDefault />
            </div>

            <div className="pc-chat-input">
                <div style={{ height: '100%', width: '100%', overflowY: 'scroll' }}>
                    <div style={{ padding: '10px' }}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{ textAlign: msg.type === 'user' ? 'right' : 'left', margin: '5px 0' }}>
                                <strong>{msg.type === 'user' ? '사용자' : '챗봇'}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>
                </div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField
                        id="outlined-basic"
                        label="육아 고민을 적어주세요"
                        variant="outlined"
                        sx={{
                            width: "70%",
                            backgroundColor: "#F4F4F4",
                            borderRadius: "15px",
                            border: "none",
                            boxShadow: "2px 2px 5px #DADADA",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    border: "none",
                                },
                                "&:hover fieldset": {
                                    border: "none",
                                },
                                "&.Mui-focused fieldset": {
                                    border: "none",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "rgb(AAAAAA)",
                                "&.Mui-focused": {
                                    display: "none",
                                    color: "black",
                                },
                            },
                        }}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        disabled={isChatEnded}
                    />
                    <div style={{ display: 'flex', marginTop: '10px' }}>
                        <IconButton type="submit" disabled={isChatEnded}>
                            <img src="/img/send.png" alt="Send" />
                        </IconButton>
                        <IconButton type="button" onClick={handleNewChat} disabled={isChatEnded}>
                            새로운 채팅 시작하기
                        </IconButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatContent;
