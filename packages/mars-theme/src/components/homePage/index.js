import React from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import BasicCard from '../table/card'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ReplayIcon from '@mui/icons-material/Replay';

function HomePage({ lorem }) {
    return (
        <Box sx={{ flexGrow: 1, mt: 8 }}>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ letterSpacing: 3, display: 'flex', alignItems: 'center' }}>
                        <b>Product Customization</b><ReplayIcon fontSize="large" />
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ width: '380px', mt: 2, mb: 4, letterSpacing: 2 }}>
                        {lorem}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button variant="contained" size="large" sx={{ borderRadius: 28, backgroundColor: "#f27f29", width: 200 }}>สร้างออเดอร์</Button>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button variant="contained" size="large" sx={{ borderRadius: 28, backgroundColor: "#13334c", width: 200 }}>ประวัติการสั่งสินค้า</Button>
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <iframe width="640" height="360" src="https://www.youtube.com/embed/5qap5aO4i9A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 4 }}>
                        <BasicCard icon={<HourglassEmptyIcon />} title="Pending" amount="-" color="#f48d40" width={155} />
                        <BasicCard icon={<CloseIcon />} title="Failure" amount="18" color="#e4606d" width={155} />
                        <BasicCard icon={<CheckIcon />} title="Success" amount="120" color="#55b96d" width={155} />
                        <BasicCard icon={<LocationCityIcon />} title="Total" amount="138" color="#425e72" width={155} />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomePage