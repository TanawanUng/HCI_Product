import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import StatusCard from '../global-component/StatusCard'
import Information from './Information';
import CreateOrder from './CreateOrder';
import Confirmation from './Confirmation';

const status = [
    {
        title: "Pending",
        icon: <HourglassEmptyIcon />,
        amount: "-",
        color: "#f48d40"
    },
    {
        title: "Failure",
        icon: <CloseIcon />,
        amount: "18",
        color: "#e4606d"
    },
    {
        title: "Success",
        icon: <CheckIcon />,
        amount: "120",
        color: "#55b96d"
    },
    {
        title: "Total",
        icon: <LocationCityIcon />,
        amount: "138",
        color: "#425e72"
    }
]

function Main() {
    const [order, setOrder] = useState(1)

    return (
        <Box sx={{ flexGrow: 1, mt: 20, mx: { xs: 4, md: 15 } }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                    <Box textAlign='center' sx={{ px: { xs: 0, lg: 28 } }}>
                        <Typography variant="h5" gutterBottom align="left" sx={{ letterSpacing: 3 }}>
                            <b>Product Customization</b><RefreshIcon fontSize="large" sx={{ mb: -1 }} onClick={() => setOrder(1)} />
                        </Typography>
                        {
                            {
                                '1': <Information setOrder={setOrder} />,
                                '2': <DndProvider backend={HTML5Backend}><CreateOrder setOrder={setOrder} /></DndProvider>,
                                '3': <Confirmation setOrder={setOrder} />
                            }[order]
                        }
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                    <Box textAlign='center'>
                        <iframe src="https://www.youtube.com/embed/V45kXIaQYM0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <Grid container>
                            {status.map((status, index) =>
                                <Grid item xs={6} lg={3} sx={(index % 2 === 0) ? { pl: { xs: 0, sm: 10, md: 0 } } : { pr: { xs: 0, sm: 10, md: 0 } }} key={index}>
                                    <StatusCard icon={status.icon} title={status.title} amount={status.amount} color={status.color} />
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Main