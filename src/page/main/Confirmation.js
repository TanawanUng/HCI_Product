import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';

function Confirmation({ setOrder }) {
  const [reset, setOrder_reset] = useState(0)

  return (
    <Card sx={{ width: { xs: 300, md: 430, sm: 400, alignItems: "center" } }}>
      <CardHeader
        title={
          <Typography variant="h5" sx={{ mr: -3.4 }}>สร้างออเดอร์</Typography>
        }
        sx={{
          backgroundColor: "#f27f29",
        }}
        action={
          <RefreshIcon fontSize="large" viewBox="0 -2 24 24" onClick={() => setOrder(1)} />
        }
      />

      <CardContent>
        <Grid>
          <Typography display="inline">Order#1234<br /><br /><br /></Typography>
          <Typography display="inline">Start time: 00.00.00<br /></Typography>
          <Typography display="inline">Stop&nbsp; time: 00.00.00<br /></Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Box
              // onClick={() => setOrder(2)}
              variant="contained"
              size="large"
              sx={{
                borderRadius: 28,
                backgroundColor: "#f27f29",
                width: 220,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <body1>STATUS:PENDING</body1>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              onClick={() => { setOrder(2); setOrder_reset(1); }}

              variant="contained"
              size="large"
              sx={{
                borderRadius: 28,
                backgroundColor: "#13334c",
                width: 220,
              }}
            >
              <body1>CREATE NEW ORDER</body1>
            </Button>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Confirmation