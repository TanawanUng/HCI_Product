import React from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import EnhancedTableHead from '../table/table'
import BasicCard from '../table/card'
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
            <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 4 }}>
                <BasicCard icon={<HourglassEmptyIcon />} title="Pending" amount="-" color="#f48d40" width={275} />
                <BasicCard icon={<CloseIcon />} title="Failure" amount="18" color="#e4606d" width={275} />
                <BasicCard icon={<CheckIcon />} title="Success" amount="120" color="#55b96d" width={275} />
                <BasicCard icon={<LocationCityIcon />} title="Total" amount="138" color="#425e72" width={275} />
            </Stack>
            <EnhancedTableHead />
        </div>
    )
}

export default HistoryPage