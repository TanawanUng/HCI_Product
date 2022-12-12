import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import InventoryIcon from '@mui/icons-material/Inventory';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ReactHlsPlayer from 'react-hls-player';

import StatusCard from '../global-component/StatusCard'
import Information from './Information';
import CreateOrder from './CreateOrder';
import Confirmation from './Confirmation';

const theme = createTheme({
    palette: {
        primary: {
            main: '#374454',
        },
        secondary: {
            main: '#f27314',
        },
    },
    typography: {
        h4: {
            fontFamily: 'Noto Sans Thai',
        },
        h5: {
            fontFamily: 'Noto Sans Thai',
            fontWeight: 600,
            color: '#374454',
        },
        h6: {
            fontFamily: 'Noto Sans Thai',
            fontWeight: 600,
            color: '#fff',
        },
        body1: {
            fontFamily: 'Noto Sans Thai',
            color: '#374454',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: () => ({
                    fontFamily: 'Noto Sans Thai',
                }),
            },
        },
    },
});

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
        icon: <InventoryIcon />,
        amount: "138",
        color: "#425e72"
    }
]

function Main() {
    const [order, setOrder] = useState(1)

    return (
        <Box sx={{ flexGrow: 1, mt: 18, mx: { xs: 4, md: 15 } }}>
            <ThemeProvider theme={theme}>
                <Box textAlign='center' sx={{ px: { xs: 0, lg: 8, xl: 28 } }}>
                    <Typography variant="h5" gutterBottom align="left" sx={{ letterSpacing: 3, mr: 1, my: 1 }}>
                        <b>Product Customization</b>
                    </Typography>
                </Box>
                <Grid container spacing={2} sx={{ mt: 0 }}>
                    <Grid item xs={12} md={6}>
                        <Box textAlign='center'>
                            {
                                {
                                    '1': <Information setOrder={setOrder} />,
                                    '2': <DndProvider backend={HTML5Backend}><CreateOrder setOrder={setOrder} /></DndProvider>,
                                    '3': <Confirmation setOrder={setOrder} />
                                }[order]
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box textAlign='center'>
                            <ReactHlsPlayer
                                src="https://stream.hcilab.net/hls/smartfactory1.m3u8"
                                autoPlay={false}
                                controls={true}
                                width="100%"
                                height="auto"
                            />
                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                {status.map((status, index) =>
                                    <Grid item xs={6} sm={3} key={index}>
                                        <StatusCard icon={status.icon} title={status.title} amount={status.amount} color={status.color} />
                                    </Grid>
                                )}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Box >
    )
}

export default Main