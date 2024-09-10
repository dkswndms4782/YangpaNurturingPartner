import React from "react";
import {TextField} from "@mui/material";

const ChatContent: React.FC = () => {
    const makeSx = {
        backgroundColor: "white",
        borderRadius: "15px",
        border: "black",
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
    };

    return (
        <div className={"pc-show-chat"}>
            <div className={"pc-chat-part"}>
                {/* 채팅 공간 */}
                <div className={"pc-ask"}>
                    <span>육아 고민을 물어보세요</span>
                    <div><span>애기가 편식을 너무 심하게 해</span></div>
                    <div><span>책을 어떻게 읽어 줘야 할까</span></div>
                    <div><span>오은영 10계명 알려줘</span></div>
                </div>
            </div>

            <div className={"pc-chat-input"}>
                <TextField
                    id="outlined-basic"
                    label="육아 고민 AI에게 물어보기"
                    variant="outlined"
                    sx={makeSx}
                    InputProps={{
                        endAdornment: (
                            <img className={"pc-search-icon"} src={"/img/search.png"} alt={""}/>
                        ),
                    }}
                />
            </div>
        </div>
    );
}

export default ChatContent;