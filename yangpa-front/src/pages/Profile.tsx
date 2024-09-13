import React from "react";
import "../css/profileCss.scss";

const Profile: React.FC = () => {
    return (
        <div className={"pc-profile-body"}>
            <div className={"pc-profile-box"}>
                <div className={"pc-profile-title"}>
                    <span>프로필을 선택 하세요.</span>
                </div>

                <div className={"pc-profile-choose"}>
                    {Array.from({length: 2}).map((_, index: number) => {
                        return (
                            <div className={"pc-profile-child-box"} key={index}>
                                <div className={"pc-profile-child"}>
                                    <div className={"pc-profile-setup-box"}>
                                        <img src={"/img/setup.png"} alt={""}/>
                                    </div>
                                    <img src={"/img/child1.png"} alt={""}/>
                                    <span>첫째 김하율</span>
                                </div>
                            </div>
                        );
                    })}

                    <div className={"pc-profile-child-box"}>
                        <div className={"pc-profile-child"}>
                            <div className={"pc-profile-add-box"}>
                                <img src={"/img/addChild.png"} alt={""}/>
                            </div>
                            <span>아이 등록</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;