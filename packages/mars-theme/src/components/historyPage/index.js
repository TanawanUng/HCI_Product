import React from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import EnhancedTableHead from '../table/table'
import StatusCard from '../table/card'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import LocationCityIcon from '@mui/icons-material/LocationCity';

function HistoryPage() {
    return (
        <div>
            <Box sx={{ flexDirection: 'row', mt: 8, mb: 2 }}>
                <Typography sx={{ display: 'inline-block' }} variant="h4" component="div">
                    <b>Product Customization</b>
                </Typography>
                <Typography sx={{ display: 'inline-block', pl: '2em' }} variant="h5" component="div">
                    Create Order | History
                </Typography>
            </Box>
            <Box sx={{ width: '100%', mt: 2, mb: 4 }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <StatusCard icon={<HourglassEmptyIcon />} title="Pending" amount="-" color="#f48d40" />
                    <StatusCard icon={<CloseIcon />} title="Failure" amount="18" color="#e4606d" />
                    <StatusCard icon={<CheckIcon />} title="Success" amount="120" color="#55b96d" />
                    <StatusCard icon={<LocationCityIcon />} title="Total" amount="138" color="#425e72" />
                </Box>
            </Box>
            <EnhancedTableHead />
        </div>
    )
}

export default HistoryPage