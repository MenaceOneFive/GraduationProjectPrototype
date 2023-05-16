import React from "react";
import {SimpleTemplate} from "./PageTemplate";
import {Button, Card} from "@mui/material";
import {RecentOrders} from "../components/RecentOrders";
import {MypageCards} from "../components/MypageCards";
import {RecentMeets} from "../components/RecentMeets";
import {MyMessagebox} from "../components/MyMessagebox";
import {BottomNavigationTab} from "../types/PageHeaderParam";
import {OrangeButton} from "../components/styled/Buttons";
import {removeMyInfo} from "../api/Member";
import {getMyToken} from "../api/Common";
import {useNavigate} from "react-router-dom";

export const Mypage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        removeMyInfo();
    };
    if (getMyToken() === "")
        return (
            <Card>
                {/*<Button sx={WhiteButton} style={{width: "100%", borderRadius: "0.3rem"}}*/}
                {/*        onClick={handleLogout}>로그아웃하기 </Button>*/}
                <Button sx={OrangeButton} style={{width: "100%", borderRadius: "0.3rem"}}
                        onClick={() => navigate('/login')}>로그인 하러가기 </Button>
            </Card>)
    else
        return (
            <SimpleTemplate param={{pageHeaderName: "마이페이지", tab: BottomNavigationTab.MYPAGE}}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginRight: "10px"
                }}>
                    <div></div>
                    <a href="/mypage/editmyinfo" style={{color: 'black'}}>내 정보 수정</a>
                </div>

                <MypageCards title="최근 주문 내역" content={<RecentOrders/>} link="/mypage/recentorderdetail"/>
                <MypageCards title="최근 만남" content={<RecentMeets/>} link="/mypage/recentmeetdetail"/>
                {/*
                추후에 구현하는 것으로 변경
                <MypageCards title="나의 모임" content={<MyMeetings />} link="/mypage/mymeetingsdetail" />*/}
                <MypageCards title="나의 쪽지함" content={<MyMessagebox/>} link="/mypage/mymessagedetail"/>
            </SimpleTemplate>
        )
}