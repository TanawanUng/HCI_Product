import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';


function StatusCard({ icon, title, amount, color }) {
    return (
        <Card sx={{ flexGrow: 1 }}>
            <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
                    <Avatar sx={{ bgcolor: `${color}`, width: 27, height: 27, mr: 1 }}>{icon}</Avatar>
                    <Typography component="h4" variant="p" gutterBottom>
                        {title}
                    </Typography>
                </Box>
                <Typography component="p" variant="h4" sx={{ my: 2, textAlign: 'center' }}>
                    {amount}
                </Typography>
                <Divider sx={{ background: `${color}`, borderBottomWidth: 3 }} variant="middle" />
            </CardContent>
        </Card>
    );
}

export default StatusCard