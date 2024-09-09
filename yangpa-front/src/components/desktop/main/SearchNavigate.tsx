import React from "react";

const SearchNavigate: React.FC = () => {

    return (
        <div className={"pc-search-navigate"}>
            <div className={"pc-search-navigate-icon"}>
                <img src={"/img/goChat.png"} alt={""}/>
                <span>채팅하기</span>
                <span>육아 고민이 있을 때 <br/> AI에게 물어보세요</span>
            </div>

            <div className={"pc-search-navigate-icon"}>
                <img src={"/img/goSearch.png"} alt={""}/>
                <span>통합검색</span>
                <span>육아 자료를 검색해보세요 <br/> 커뮤니티 글, 영상, 문서, <br/> 채팅 히스토리 등 추천드립니다.</span>
            </div>

            <div className={"pc-search-navigate-icon"}>
                <img src={"/img/goCommunity.png"} alt={""}/>
                <span>커뮤니티</span>
                <span>다른 사람들과 고민을 <br/> 공유해보세요</span>
            </div>
        </div>
    )
}

export default SearchNavigate;