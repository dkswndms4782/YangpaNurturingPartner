import React, {useRef} from "react";
import {styled} from "@mui/system";
import TextField from "@mui/material/TextField";
import {blue, grey} from "../../../../pages/CommContent";

const CommContentShow:React.FC = () => {
    const imgRef = useRef<HTMLImageElement | null>(null); // 이미지에 대한 참조 생성

    const handleFullScreen = () => {
        if (imgRef.current) {
            if (imgRef.current.requestFullscreen) {
                imgRef.current.requestFullscreen();
            } else if ((imgRef.current as any).webkitRequestFullscreen) {
                (imgRef.current as any).webkitRequestFullscreen();
            } else if ((imgRef.current as any).msRequestFullscreen) {
                (imgRef.current as any).msRequestFullscreen();
            }
        }
    };

    const Textarea = styled(TextField)(({theme}) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    &:hover {
      border-color: ${blue[400]};
    }
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  `);

    return (
        <>
            <div className={"pc-comm-content-title"}>
                <Textarea
                    minRows={1}
                    maxRows={1}
                    value="제목"
                    sx={{
                        width: "100%",
                        marginBottom: "1vh",
                        color: 'black',
                        pointerEvents: 'none',
                    }}
                    InputProps={{
                        readOnly: true,
                    }}
                    tabIndex={-1}
                />
            </div>

            <div className={"pc-comm-content-content"}>
                <Textarea
                    multiline
                    minRows={25}
                    value="글 내용"
                    sx={{
                        width: "100%",
                        marginBottom: "1vh",
                        color: 'black',
                        pointerEvents: 'none',
                        height: "auto"
                    }}
                    InputProps={{
                        readOnly: true,
                    }}
                    tabIndex={-1}
                />

                <img
                    className={"pc-comm-content-img"}
                    src={"/img/mainPaint.png"}
                    alt={""}
                    onClick={handleFullScreen}
                    ref={imgRef}
                    style={{cursor: "pointer"}}
                />
            </div>
        </>
    )
}

export default CommContentShow;