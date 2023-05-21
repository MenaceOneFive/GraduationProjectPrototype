import React from "react";
import {Card, Typography} from "@mui/material";
import {OrderList} from "../types/Order";


export const RecentOrder: React.FC<OrderList> = (detail: OrderList) => {
    const navigate = useNavigate();

    const handleReviewClick = (detail: OrderList) => {
        console.log("주문번호 : "+detail.ordersId+detail.paymentDto.detail+"에 대한 리뷰 작성")
        navigate(`/review/${detail.paymentDto.detail}`);
      };

    return (<>
        <Card sx={{
            paddingLeft: '10px',
            paddingRight: '10px',
            marginTop:"7px",
            display: "flex",
            flex: "1",
            justifyContent: "space-between",
            alignItems: "center",
            minWidth: 280,
            maxWidth: 400
        }}>
            <Typography variant={"subtitle2"} fontWeight='bold'>{detail.ordersId}</Typography>
            <Typography
                variant={"subtitle2"}>{detail.paymentDto.detail != null ? detail.paymentDto.detail : ""}</Typography>
            <Typography variant={"subtitle2"} fontWeight='bold'
                        style={{color: "#FE724C"}}>{detail.ordersType}</Typography>
        </Card> </>)
}