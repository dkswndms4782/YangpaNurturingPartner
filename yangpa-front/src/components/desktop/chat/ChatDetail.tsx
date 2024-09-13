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
        <div>
            <h1>채팅 상세</h1>
            <div>
                {chatDetail.length > 0 ? (
                    chatDetail.map((detail, index) => (
                        <div key={index}>
                            <p><strong>질문:</strong> {detail.query}</p>
                            <p><strong>답변:</strong> {detail.answer}</p>
                            <p><strong>시간:</strong> {new Date(detail.qa_time).toLocaleString()}</p>
                        </div>
                    ))
                ) : (
                    <p>채팅 상세 정보가 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default ChatDetail;
