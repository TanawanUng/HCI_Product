import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function MobileNavbar({ navItems, props, mobileOpen, handleDrawerToggle }) {
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    // ========================== Start Mobile Dropdown Function Section ==========================
    const [mOpen, setMOpen] = useState(false);

    const handleMClick = () => {
        setMOpen(!mOpen);
    };
    // ========================== End Mobile Dropdown Function Section ==========================

    // ========================== Start Mobile Dropdown2 Function Section ==========================
    const [mOpen2, setMOpen2] = useState(false);

    const handleMClick2 = () => {
        setMOpen2(!mOpen2);
    };
    // ========================== End Mobile Dropdown2 Function Section ==========================

    return (
        <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { xs: '250px', sm: '300px' } },
                }}
            >
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ m: 2 }}>
                        Educational Smart Factory Platform
                    </Typography>
                    <Divider />
                    <List>
                        {navItems.map((item) => (
                            <Box key={item.id} >
                                {!item.subitems
                                    ?
                                    <ListItemButton component="a" href={item.url}>
                                        <ListItemText primary={<Typography variant="h6">{item.title}</Typography>} />
                                    </ListItemButton>
                                    :
                                    <>
                                        <ListItemButton onClick={() => handleMClick()}>
                                            <ListItemText primary={<Typography variant="h6" sx={{ color: mOpen ? '#f27314' : '#374454 !important' }}>{item.title}</Typography>} />
                                            {mOpen ? <ExpandLess sx={{ color: '#f27314' }} /> : <ExpandMore sx={{ color: '#374454' }} />}
                                        </ListItemButton>
                                        <Collapse in={mOpen} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {item.subitems.map((sitem) => (
                                                    <Box key={sitem.id}>
                                                        {!sitem.subsubitems
                                                            ?
                                                            <ListItemButton component="a" href={sitem.url} sx={{ ml: 2, borderLeft: 2, borderColor: '#f27314' }}>
                                                                <ListItemText primary={<Typography variant="h6">{sitem.title}</Typography>} />
                                                            </ListItemButton>
                                                            :
                                                            <>
                                                                <ListItemButton onClick={() => handleMClick2()} sx={{ ml: 2, borderLeft: 2, borderColor: '#f27314' }}>
                                                                    <ListItemText primary={<Typography variant="h6" sx={{ color: mOpen2 ? '#f27314' : '#374454 !important' }}>{sitem.title}</Typography>} />
                                                                    {mOpen2 ? <ExpandLess sx={{ color: '#f27314' }} /> : <ExpandMore sx={{ color: '#374454' }} />}
                                                                </ListItemButton>

                                                                <Collapse in={mOpen2} timeout="auto" unmountOnExit>
                                                                    <List component="div" disablePadding>
                                                                        {sitem.subsubitems.map((ssitem) => (
                                                                            <ListItemButton key={ssitem.id} component="a" href={ssitem.url} sx={{ ml: 4, borderLeft: 2, borderColor: '#f27314' }}>
                                                                                <ListItemText primary={<Typography variant="h6">{ssitem.title}</Typography>} />
                                                                            </ListItemButton>
                                                                        ))}
                                                                    </List>
                                                                </Collapse>
                                                            </>
                                                        }
                                                    </Box>
                                                ))}
                                            </List>
                                        </Collapse>
                                    </>
                                }
                            </Box>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}

export default MobileNavbar;