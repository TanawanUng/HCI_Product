import React, { useState } from 'react'
import axios from 'axios'
import { useDrop } from "react-dnd";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

        if (pic[0] && pic[1] && pic[2] && pic[3]) {
            setOrder(3)
            let order_ = [pic[0], pic[1], pic[2], pic[3]]
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

    const [selected1, setSelected1] = useState();
    const [selected2, setSelected2] = useState();
    const [selected3, setSelected3] = useState();
    const [selected4, setSelected4] = useState();

    const [{ isOver1 }, drop1] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToSelected1(item.id),
        collect: (monitor) => ({
            isOver1: !!monitor.isOver(),
        }),
    }));
    const [{ isOver2 }, drop2] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToSelected2(item.id),
        collect: (monitor) => ({
            isOver2: !!monitor.isOver(),
        }),
    }));
    const [{ isOver3 }, drop3] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToSelected3(item.id),
        collect: (monitor) => ({
            isOver3: !!monitor.isOver(),
        }),
    }));
    const [{ isOver4 }, drop4] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToSelected4(item.id),
        collect: (monitor) => ({
            isOver4: !!monitor.isOver(),
        }),
    }));

    const addImageToSelected1 = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setSelected1(pictureList[0]);
    };
    const addImageToSelected2 = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setSelected2(pictureList[0]);
    };
    const addImageToSelected3 = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setSelected3(pictureList[0]);
    };
    const addImageToSelected4 = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setSelected4(pictureList[0]);
    };

    let pic = ["", "", "", ""];                     //pic = "" เป็น false, pic = "something" เป็น true ดังนั้น สามารถใช้ pic ในการเช็คได้ จึงเอา count ออกเพื่อลดความซ้ำซ้อนของโปรแกรม

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
        <Box sx={{ justifyContent: "center", backgroundColor: "#e3e3e3", display: 'flex' }}>
            <Grid container spacing={2}>
                {/* ========================== Start Header Section ========================== */}
                <Grid item xs={12}>
                    <Box sx={{ backgroundColor: '#f27314', py: 1 }}>
                        <Stack direction="row" spacing={2}>
                            <KeyboardArrowLeftIcon fontSize="large" onClick={() => setOrder(1)} sx={{ color: '#fff' }} />
                            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                                สร้างออเดอร์
                            </Typography>
                        </Stack>
                    </Box>
                </Grid>
                {/* ========================== End Header Section ========================== */}

                {/* ========================== Start Drag Section ========================== */}
                <Grid item xs={12}>
                    {PictureList.map((picture, index) => {
                        return <Picture url={picture.url} id={picture.id} key={index} />
                    })}
                </Grid>
                {/* ========================== End Drag Section ========================== */}

                {/* ========================== Start Drop Section ========================== */}
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} lg={3}>
                            <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                Item 1
                                <Box ref={drop1} sx={{ backgroundColor: 'white', border: "2px solid black", width: { xs: "64px", sm: "128px" }, height: { xs: "64px", sm: "128px" }, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '16px' }} >
                                    {selected1 ? (
                                        pic[0] = selected1.description,
                                        <Picture url={selected1.url} id={selected1.id} />
                                    ) : "ใส่ผลไม้ตรงนี้"}
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} lg={3}>
                            <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                Item 2
                                <Box ref={drop2} sx={{ backgroundColor: 'white', border: "2px solid black", width: { xs: "64px", sm: "128px" }, height: { xs: "64px", sm: "128px" }, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '16px' }} >
                                    {selected2 ? (
                                        pic[1] = selected2.description,
                                        <Picture url={selected2.url} id={selected2.id} />
                                    ) : "ใส่ผลไม้ตรงนี้"}
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} lg={3}>
                            <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                Item 3
                                <Box ref={drop3} sx={{ backgroundColor: 'white', border: "2px solid black", width: { xs: "64px", sm: "128px" }, height: { xs: "64px", sm: "128px" }, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '16px' }} >
                                    {selected3 ? (
                                        pic[2] = selected3.description,
                                        <Picture url={selected3.url} id={selected3.id} />
                                    ) : "ใส่ผลไม้ตรงนี้"}
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} lg={3}>
                            <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                Item 4
                                <Box ref={drop4} sx={{ backgroundColor: 'white', border: "2px solid black", width: { xs: "64px", sm: "128px" }, height: { xs: "64px", sm: "128px" }, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '16px' }} >
                                    {selected4 ? (
                                        pic[3] = selected4.description,
                                        <Picture url={selected4.url} id={selected4.id} />
                                    ) : "ใส่ผลไม้ตรงนี้"}
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                {/* ========================== End Drop Section ========================== */}

                {/* ========================== Start Button Section ========================== */}
                <Grid item xs={12}>
                    <Button
                        onClick={() => { setSelected1(); setSelected2(); setSelected3(); setSelected4(); }}
                        variant="contained"
                        size="large"
                        sx={{
                            borderRadius: 28,
                            backgroundColor: "#13334c",
                            width: 100,
                            m: 2,
                        }}
                    >
                        RESET
                    </Button>

                    <Button
                        onClick={() => handleClick()}
                        variant="contained"
                        size="large"
                        sx={{
                            borderRadius: 28,
                            backgroundColor: "#13334c",
                            width: 100,
                            m: 2,
                        }}
                    >
                        ORDER
                    </Button>

                    {/* ========================== Start Alert Section ========================== */}
                    <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
                        <Alert onClose={handleAlertClose} severity="error" sx={{ width: '100%' }}>
                            กรุณาใส่ผลไม้ให้ครบก่อนไปขั้นตอนถัดไป!
                        </Alert>
                    </Snackbar>
                    {/* ========================== End Alert Section ========================== */}
                </Grid>
                {/* ========================== End Button Section ========================== */}
            </Grid>
        </Box >
    )
};

export default CreateOrder