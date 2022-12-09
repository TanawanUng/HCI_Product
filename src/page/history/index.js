import React from 'react'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import LocationCityIcon from '@mui/icons-material/LocationCity';

import HistoryTable from './HistoryTable'
import StatusCard from '../global-component/StatusCard'

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
    <Box sx={{ flexGrow: 1, mt: 18, mx: { xs: 4, md: 15, xl: 64 } }}>
      <Stack direction="row">
        <Link to="/">
          <KeyboardArrowLeftIcon fontSize="large" href="/" sx={{ mt: 1.5, color: 'black' }} />
        </Link>
        <Typography variant="h4" gutterBottom align="left" sx={{ letterSpacing: 3, m: 1 }}>
          <b> Product Customization</b>
        </Typography>
      </Stack>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {status.map((status, index) =>
          <Grid item xs={6} lg={3} key={index}>
            <StatusCard icon={status.icon} title={status.title} amount={status.amount} color={status.color} />
          </Grid>
        )}
      </Grid>
      <HistoryTable />
    </Box>
  )
}

export default HistoryPage