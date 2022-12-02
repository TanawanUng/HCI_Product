import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Confirmation({ setOrder }) {
  const [reset, setOrder_reset] = useState(0)

  return (
    <Card sx={{ width: { xs: 300, md: 430, sm: 400, alignItems: "center" } }}>
      <CardHeader
        title="สร้างออเดอร์"
        sx={{
          backgroundColor: "#f27f29",
        }}
      />

      <CardContent>
        <Grid>
          <Typography display="inline">Order#1234<br /><br /><br /></Typography>
          <Typography display="inline">Start time: 00.00.00<br /></Typography>
          <Typography display="inline">Stop&nbsp; time: 00.00.00<br /></Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              onClick={() => setOrder(2)}
              variant="contained"
              size="large"
              sx={{
                borderRadius: 28,
                backgroundColor: "#f27f29",
                width: 220,
              }}
            >
              <body1>STATUS:PENDING</body1>
            </Button>
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