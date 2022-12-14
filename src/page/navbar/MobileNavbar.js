import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
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
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '240' },
                }}
            >
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ m: 2 }}>
                        Educational Smart Factory Platform
                    </Typography>
                    <Divider />
                    <List>
                        {navItems.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                {item.title !== "การเรียนรู้"
                                    ?
                                    <ListItemButton component="a" href={item.url} sx={{ textAlign: 'center' }}>
                                        <ListItemText primary={item.title} />
                                    </ListItemButton>
                                    :
                                    <>
                                        <ListItemButton onClick={() => handleMClick()} sx={{ textAlign: 'center' }}>
                                            <ListItemText primary={item.title} />
                                            {mOpen ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={mOpen} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton component="a" href="https://smartfactory.hcilab.net/lesson/" sx={{ pl: 4 }}>
                                                    <ListItemText primary="บทเรียน" />
                                                </ListItemButton>
                                                <ListItemButton onClick={() => handleMClick2()} sx={{ pl: 4 }}>
                                                    <ListItemText primary="หน่วยสาธิต" />
                                                    {mOpen2 ? <ExpandLess /> : <ExpandMore />}
                                                </ListItemButton>
                                                <Collapse in={mOpen2} timeout="auto" unmountOnExit>
                                                    <List component="div" disablePadding>
                                                        <ListItemButton component="a" href="https://smartfactory.hcilab.net/product-customization/" sx={{ pl: 4 }}>
                                                            <ListItemText primary="Product Customization" />
                                                        </ListItemButton>
                                                        <ListItemButton component="a" href="https://smartfactory.hcilab.net/2022/08/01/telesorting-system-api-user-manual/" sx={{ pl: 4 }}>
                                                            <ListItemText primary="TeleSorting System API User Manual" />
                                                        </ListItemButton>
                                                    </List>
                                                </Collapse>
                                            </List>
                                        </Collapse>
                                    </>
                                }
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}

export default MobileNavbar;