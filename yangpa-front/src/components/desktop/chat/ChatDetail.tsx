import React from 'react';

interface ChatDetailProps {
  chatDetail: {
    query: string;
    answer: string;
    qa_time: string;
  }[];
}

const ChatDetail: React.FC<ChatDetailProps> = ({ chatDetail }) => {
    return (
        <div className="pc-show-chat">
            <div className="pc-chat-part">
                <div style={{ height: '100%', width: '100%', overflowY: 'scroll' }}>
                    <div style={{ padding: '10px' }}>
                        {chatDetail.length > 0 ? (
                            chatDetail.map((detail, index) => (
                                <div key={index}>
                                    <div style={{ textAlign: 'right', margin: '5px 0' }}>
                                        <strong>사용자:</strong> {detail.query}
                                        <p style={{ fontSize: '12px', color: '#888' }}>{new Date(detail.qa_time).toLocaleString()}</p>
                                    </div>
                                    <div style={{ textAlign: 'left', margin: '5px 0' }}>
                                        <strong>챗봇:</strong> {detail.answer}
                                        <p style={{ fontSize: '12px', color: '#888' }}>{new Date(detail.qa_time).toLocaleString()}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className={"no-records"}>채팅 기록이 없습니다.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatDetail;
