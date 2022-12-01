import React, { useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import { useDrop } from "react-dnd";

import DragDrop from "./DragDrop";
import Picture from "./Picture";

const PictureList = [
    {
        id: 1,
        description: "red",
        url:
            "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQlO_2ts2YDGtpdafB8JDZzGVfyKlmFCn7paIJmTsKhfbev0I3O-OoMwgHJUDjSTc-KbjZge4_FgB2BUqVblVM",
    },
    {
        id: 2,
        description: "green",
        url:
            "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
    },
    {
        id: 3,
        description: "yellow",
        url:
            "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
    },
    {
        id: 4,
        description: "yellow",
        url:
            "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
    },
    {
        id: 5,
        description: "yellow",
        url:
            "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
    }, {
        id: 6,
        description: "yellow",
        url:
            "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
    },
];

function CreateOrder() {

    const handleClick = event => {

        if (count == 1 && count2 == 1 && count3 == 1 && count4 == 1) {
            setOrder(2)
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

    };

    const [order, setOrder] = useState(0)
    const [reset, setOrder_reset] = useState(0)

    const [board, setBoard] = useState([]);
    const [board2, setBoard2] = useState([]);
    const [board3, setBoard3] = useState([]);
    const [board4, setBoard4] = useState([]);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
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

        setBoard([pictureList[0]]);
    };
    const addImageToBoard2 = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        // onsole.log(id)
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

    let count = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    let pic1 = "";
    let pic2 = "";
    let pic3 = "";
    let pic4 = "";


    return (
        <Card sx={{ width: { xs: 300, md: 430, sm: 400, alignItems: "center" } }} >
            <CardHeader
                title="สร้างออเดอร์"
                sx={{
                    backgroundColor: "#f27f29",
                }}
            />
            <CardContent>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>

                    {/* <Grid sx={{maxWidth:"400px" }} > */}
                    {reset === 1 &&
                        setBoard([])
                    }
                    {reset === 1 &&
                        setBoard2([])
                    }
                    {reset === 1 &&
                        setBoard3([])
                    }
                    {reset === 1 &&
                        setBoard4([])
                    }
                    {reset === 1 &&
                        setOrder_reset(0)
                    }

                    <Stack direction="row" justifyContent="center" alignItems="center" sx={{ flexWrap: 'wrap' }}>

                        {PictureList.map((picture) => {


                            return <Picture url={picture.url} id={picture.id} />

                        })

                        }
                    </Stack>

                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                        <Typography>
                            Item 1
                            <Grid ref={drop} style={{ backgroundColor: 'white', width: '115px', height: '55px', border: "2px solid black" }} >
                                {board.map((picture) => {
                                    count = 1
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
                                    console.log(count)
                                    count4 = 1
                                    pic4 = picture.description
                                    return <Picture url={picture.url} id={picture.id} />;

                                })}
                            </Grid>
                        </Typography>
                    </Stack>
                    <Grid justifyContent="space-around" container spacing={1} width="250px"  >
                        <Button
                            onClick={() => setOrder_reset(1)}
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
                    </Grid>
                </Stack>
            </CardContent>
        </Card>
    )
};

export default CreateOrder