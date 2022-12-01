import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);


function StatusCard({ icon, title, amount, color }) {
    return (
        <Card sx={{ flexGrow: 1, m: 1 }}>
            <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
                    <Avatar sx={{ bgcolor: `${color}`, width: 27, height: 27, mr: 1 }}>{icon}</Avatar>
                    <ThemeProvider theme={theme}>
                        <Typography component="h4" variant="p" gutterBottom>
                            {title}
                        </Typography>
                    </ThemeProvider>
                </Box>
                <ThemeProvider theme={theme}>
                    <Typography component="p" variant="h4" sx={{ my: 2, textAlign: 'center' }}>
                        {amount}
                    </Typography>
                </ThemeProvider>
                <Divider sx={{ background: `${color}`, borderBottomWidth: 3 }} variant="middle" />
            </CardContent>
        </Card>
    );
}

export default StatusCard