import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Information({ setOrder }) {
    return (
        <Box sx={{ px: { xs: 0, lg: 8, xl: 28 } }}>
            <Typography variant="body1" gutterBottom align="justify" sx={{ mb: 4, letterSpacing: 2 }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button variant="contained" size="large" sx={{ borderRadius: 28, backgroundColor: "#f27f29", width: 200 }} onClick={() => setOrder(2)}><body1>สร้างออเดอร์</body1></Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Link to='/history' style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="large" sx={{ borderRadius: 28, backgroundColor: "#13334c", width: 200 }}>ประวัติการสั่งสินค้า</Button>
                </Link>
            </Box>
        </Box>
    )
}

export default Information