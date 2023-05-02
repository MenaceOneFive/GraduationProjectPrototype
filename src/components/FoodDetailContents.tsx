import {Box, Button, FormControlLabel, Link, Paper, Radio, RadioGroup, Typography} from "@mui/material"
import {FaStar} from "react-icons/fa"
import foodImage from '../images/testfood.png'
import {useState} from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {MdAddCircleOutline, MdRemoveCircleOutline} from 'react-icons/md';
import {useAppDispatch} from "../store/hooks";
import {add} from "../store/cart";

export const FoodDetailContents: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };
    const dispatch = useAppDispatch()
    return (<>

        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column", paddingTop: '10px' }}>
            <Paper sx={{ borderRadius: '1rem' }} elevation={3}>
                <img src={foodImage} alt="Food" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
            </Paper>
            <div style={{ display: "flex", alignContent: "flex-start" }} >
                <Typography fontSize={'28px'} sx={{ paddingTop: "10px", fontWeight: "bold" }}> 우삼겹 된장찌개</Typography>
            </div>
            <div style={{ display: "flex", alignContent: "flex-start" }} >
                <Typography fontSize={'12px'} color={'#3EA1FC'}> 평균 소요시간 8분</Typography>
            </div>
            <div style={{ display: "flex", alignContent: "flex-start", fontSize: '14px' }} >
                <FaStar style={{ color: "orange" }} /> 4.5 (+30)
                <Link color={'#FE724C'} sx={{ fontSize: '14px', paddingLeft: '10px' }}> 리뷰 보기</Link>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", paddingTop: '10px' }} >
                <Typography fontSize={'24px'} fontWeight={'bold'} color={'#FE724C'}>4800원</Typography>
                <Box display="flex">
                    <Button disableElevation
                        style={{ minWidth: 'unset', borderRadius: '50%', color: '#FE724C' }}
                        onClick={handleDecrement}
                        startIcon={<MdRemoveCircleOutline />}
                    />
                    <Box
                        component="span"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                        }}
                    >
                        {count}
                    </Box>
                    <Button disableElevation
                        style={{ minWidth: 'unset', borderRadius: '50%', color: '#FE724C' }}
                        onClick={handleIncrement}
                        startIcon={<MdAddCircleOutline  />}
                    />
                </Box>
            </div>
            <div style={{ display: "flex", alignContent: "flex-start", paddingTop: '10px' }} >
                <Typography fontSize={'18px'} fontWeight={'bold'}>설명</Typography>
            </div>
            <div style={{ display: "flex", alignContent: "flex-start" }} >
                <Typography align={'left'} fontSize={'15px'} fontWeight={'bold'} color={'#858992'}>우삼겹이 들어간 엄청난 된장찌개.<br /> 맛도 좋고 가성비도 좋은 우삼겹 된장찌개 단돈 4800원에 즐기세요. 산들푸드 특별메뉴!</Typography>
            </div>
            <div style={{ display: "flex", alignContent: "flex-start", paddingTop: '10px' }} >
                <Typography fontSize={'18px'} fontWeight={'bold'}>포장여부</Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: '10px' }} >
                <div style={{ alignContent: "flex-start", flexDirection: 'column', paddingTop: "13px" }}>
                    <Typography fontSize={'15px'} >포장</Typography>
                    <Typography sx={{paddingTop:"13px"}} fontSize={'15px'} >매장</Typography>
                </div>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="togo" control={<Radio size='small'/>} label="-1000 ₩"
                                      labelPlacement="start"/>
                    <FormControlLabel value="here" control={<Radio size='small'/>} label="0 ₩" labelPlacement="start"/>
                </RadioGroup>
            </div>
            <Button disableElevation disableRipple sx={{
                paddingLeft: '10px',
                paddingRight: '10px',
                margin: "5px",
                flex: "1",
                justifyContent: "center",
                alignItems: "center",
                minWidth: 280,
                backgroundColor: '#FE724C',
                color: "",
                fontWeight: "bold",
                borderRadius: "2rem",
                padding: "0.5rem",
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)"
            }} onClick={() => {
                dispatch(add({id: 1, name: "우삼겹 된장찌개", price: 4800, count: count, image: foodImage, type: "togo"}))
            }}>
                <Typography color={'white'}><ShoppingBagIcon/> 장바구니 담기</Typography>
            </Button>
        </div>
    </>
    )
}
