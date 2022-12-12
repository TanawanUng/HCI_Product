import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';

function Confirmation({ setOrder }) {
  const [reset, setOrder_reset] = useState(0)

  return (
    <Box sx={{ justifyContent: "center", backgroundColor: "#e3e3e3", display: 'flex' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ backgroundColor: '#f27314', py: 1 }}>
            <Stack direction="row" spacing={2}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, ml: 6.37 }}>
                สร้างออเดอร์
              </Typography>
              <RefreshIcon fontSize="large" onClick={() => setOrder(1)} sx={{ color: '#fff', pr: 1 }} />
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12}>
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
            <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
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
        </Grid>
      </Grid>
    </Box>
  )
}

export default Confirmation