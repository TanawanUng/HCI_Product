import React, { useState } from 'react'
import axios from 'axios'
import { useDrop } from "react-dnd";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from '@mui/material/Grid';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import DragDrop from "./DragDrop";
import Picture from "./Picture";

const PictureList = [
    {
        id: 1,
        description: "grape",
        url:
            require("../../assets/grape.png"),
    },
    {
        id: 2,
        description: "mango",
        url:
            require("../../assets/mango.png"),
    },
    {
        id: 3,
        description: "pineapple",
        url:
            require("../../assets/pineapple.png"),
    },
    {
        id: 4,
        description: "strawberry",
        url:
            require("../../assets/strawberry.png"),
    },
];

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CreateOrder({ setOrder }) {
    const handleClick = () => {

        if (count1 === 1 && count2 === 1 && count3 === 1 && count4 === 1) {
            setOrder(3)
            let order_ = [pic1, pic2, pic3, pic4]
            order_ = String(order_)

            const sendapi = {
                "user": "SMART FACTORY HCI LAB",
                "order_num": "123456",
                "order": order_,
                "status": "wait",
            }
            axios.post("http://192.168.150.28:3000/order/update/123456", sendapi)

        }
        handleAlertClick()

    };

    const [board1, setBoard1] = useState([]);
    const [board2, setBoard2] = useState([]);
    const [board3, setBoard3] = useState([]);
    const [board4, setBoard4] = useState([]);

    const [{ isOver1 }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver1: !!monitor.isOver(),
        }),
    }));
    const [{ isOver2 }, drop2] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard2(item.id),
        collect: (monitor) => ({
            isOver2: !!monitor.isOver(),
        }),
    }));
    const [{ isOver3 }, drop3] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard3(item.id),
        collect: (monitor) => ({
            isOver3: !!monitor.isOver(),
        }),
    }));
    const [{ isOver4 }, drop4] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard4(item.id),
        collect: (monitor) => ({
            isOver4: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard1([pictureList[0]]);
    };
    const addImageToBoard2 = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        // console.log(id)
        setBoard2([pictureList[0]]);
    };

    const addImageToBoard3 = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard3([pictureList[0]]);
    };
    const addImageToBoard4 = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard4([pictureList[0]]);
    };

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    let pic1 = "";
    let pic2 = "";
    let pic3 = "";
    let pic4 = "";

    // ========================== Start Alert Section ==========================
    const [alertOpen, setAlertOpen] = useState(false);

    const handleAlertClick = () => {
        setAlertOpen(true);
    };

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlertOpen(false);
    };
    // ========================== End Alert Section ==========================

    return (
        <Card sx={{ width: { xs: 300, md: 430, sm: 400, alignItems: "center" } }} >
            <Box sx={{ backgroundColor: '#f27314', py: 1 }}>
                <Stack direction="row" spacing={2}>
                    <KeyboardArrowLeftIcon fontSize="large" onClick={() => setOrder(1)} sx={{ color: '#fff' }} />
                    <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                        สร้างออเดอร์
                    </Typography>
                </Stack>
            </Box>
            <CardContent>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>

                    {/* <Grid sx={{maxWidth:"400px" }} > */}

                    <Stack direction="row" justifyContent="center" alignItems="center" sx={{ flexWrap: 'wrap' }}>
                        {PictureList.map((picture, index) => {
                            return <Picture url={picture.url} id={picture.id} key={index} />
                        })}
                    </Stack>

                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                        <Typography>
                            Item 1
                            <Grid ref={drop} style={{ backgroundColor: 'white', width: '115px', height: '55px', border: "2px solid black" }} >
                                {board1.map((picture) => {
                                    count1 = 1
                                    pic1 = picture.description
                                    console.log(picture.id)

                                    return <Picture url={picture.url} id={picture.id} />;
                                })}

                            </Grid>
                        </Typography>
                        <Typography>
                            Item 2
                            <Grid ref={drop2} style={{ backgroundColor: 'white', width: '115px', height: '55px', border: "2px solid black" }} >

                                {board2.map((picture) => {
                                    count2 = 1
                                    pic2 = picture.description
                                    return <Picture url={picture.url} id={picture.id} />;
                                })}

                            </Grid>
                        </Typography>

                    </Stack>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>

                        <Typography>
                            Item 3
                            <Grid ref={drop3} style={{ backgroundColor: 'white', width: '115px', height: '55px', alignItems: "center", border: "2px solid black" }} >

                                {board3.map((picture) => {
                                    count3 = 1
                                    pic3 = picture.description
                                    return <Picture url={picture.url} id={picture.id} />;
                                })}

                            </Grid>
                        </Typography>
                        <Typography>
                            Item 4
                            <Grid ref={drop4} style={{ backgroundColor: 'white', width: '115px', height: '55px', alignItems: "center", border: "2px solid black" }} >

                                {board4.map((picture) => {
                                    count4 = 1
                                    pic4 = picture.description
                                    return <Picture url={picture.url} id={picture.id} />;

                                })}
                            </Grid>
                        </Typography>
                    </Stack>
                    <Grid justifyContent="space-around" container spacing={1} width="250px"  >
                        <Button
                            onClick={() => { setBoard1([]); setBoard2([]); setBoard3([]); setBoard4([]); }}
                            variant="contained"
                            size="large"
                            sx={{
                                borderRadius: 28,
                                backgroundColor: "#13334c",
                                width: 100,
                            }}
                        >
                            RESET
                        </Button>

                        <Button
                            onClick={true ? handleClick : undefined}
                            variant="contained"
                            size="large"
                            sx={{
                                borderRadius: 28,
                                backgroundColor: "#13334c",
                                width: 100,
                            }}
                        >
                            ORDER
                        </Button>
                        <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
                            <Alert onClose={handleAlertClose} severity="error" sx={{ width: '100%' }}>
                                กรุณาใส่ผลไม้ให้ครบก่อนไปขั้นตอนถัดไป!
                            </Alert>
                        </Snackbar>
                    </Grid>
                </Stack>
            </CardContent>
        </Card>
    )
};

export default CreateOrder