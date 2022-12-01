import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import LocationCityIcon from '@mui/icons-material/LocationCity';

import HistoryTable from './HistoryTable'
import StatusCard from '../globalComponent/StatusCard'

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

function HistoryPage() {
  return (
    <Box sx={{ flexGrow: 1, mt: 20, mx: { xs: 4, md: 15, lg: 64 } }}>
      <Typography variant="h4" gutterBottom align="left" sx={{ letterSpacing: 3 }}>
        <b>Product Customization</b>
      </Typography>
      <Grid container>
        {status.map((status, index) =>
          <Grid item xs={6} lg={3} sx={(index % 2 === 0) ? { pl: { xs: 0, sm: 10, md: 0 } } : { pr: { xs: 0, sm: 10, md: 0 } }} key={index}>
            <StatusCard icon={status.icon} title={status.title} amount={status.amount} color={status.color} />
          </Grid>
        )}
      </Grid>
      <HistoryTable />
    </Box>
  )
}

export default HistoryPage