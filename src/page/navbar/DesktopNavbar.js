import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { popoverClasses } from "@mui/material/Popover"
import Typography from '@mui/material/Typography';

function DesktopNavbar({ navItems }) {
    // ========================== Start Dropdown Function Section ==========================
    let currentlyHovering = false;

    const [anchorEl, setAnchorEl] = useState(null);

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleHover() {
        currentlyHovering = true;
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function handleCloseHover() {
        currentlyHovering = false;
        setTimeout(() => {
            if (!currentlyHovering) {
                handleClose();
            }
        }, 50);
    }
    // ========================== End Dropdown Function Section ==========================

    // ========================== Start Dropdown2 Function Section ==========================
    let currentlyHovering2 = false;

    const [anchorEl2, setAnchorEl2] = useState(null);

    function handleClick2(event) {
        if (anchorEl2 !== event.currentTarget) {
            setAnchorEl2(event.currentTarget);
        }
    }

    function handleHover2() {
        currentlyHovering2 = true;
    }

    function handleClose2() {
        setAnchorEl2(null);
    }

    function handleCloseHover2() {
        currentlyHovering2 = false;
        setTimeout(() => {
            if (!currentlyHovering2) {
                handleClose2();
            }
        }, 50);
    }
    // ========================== End Dropdown2 Function Section ==========================

    return (
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
                <Box key={item.id} sx={{ display: 'inline-flex' }}>
                    {!item.subitems
                        ?
                        <Button sx={{ mx: { xs: 0, md: 0.5 }, mt: 1.8, pb: 2.7 }} href={item.url}>
                            {item.title}
                        </Button>
                        :
                        <>
                            <Button sx={{ mx: { xs: 0, md: 0.5 }, mt: 1.8, pb: 2.7, color: (anchorEl !== null) && '#f27314', borderBottom: (anchorEl !== null) && 'solid 3px #f27314' }} onClick={handleClick} onMouseOver={handleClick} onMouseLeave={handleCloseHover}>
                                {item.title}
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                MenuListProps={{
                                    onMouseEnter: handleHover,
                                    onMouseLeave: handleCloseHover,
                                    style: { pointerEvents: "auto" }
                                }}
                                sx={{ [`&.${popoverClasses.root}`]: { pointerEvents: "none" }, }}
                                TransitionComponent={Fade}
                                PaperProps={{
                                    sx: {
                                        borderTop: 4,
                                        borderColor: '#f27314',
                                        mt: -0.5,
                                    },
                                }}
                                disableAutoFocusItem
                            >
                                {item.subitems.map((sitem) => (
                                    <Box key={sitem.id}>
                                        {!sitem.subsubitems
                                            ?
                                            <MenuItem sx={{ pl: 3.5, pt: 3, pr: 17, color: '#374454' }} onMouseEnter={(e) => { e.target.style.color = '#f27314'; e.target.style.backgroundColor = '#fff'; }} onMouseLeave={(e) => e.target.style.color = '#374454'} component="a" href={sitem.url}>
                                                <Typography variant="h6">{sitem.title}</Typography>
                                            </MenuItem>
                                            :
                                            <>
                                                <MenuItem sx={{ pl: 3.5, pb: 3, pr: 17, color: '#374454' }} onMouseEnter={(e) => { e.target.style.color = '#f27314'; e.target.style.backgroundColor = '#fff'; }} onMouseLeave={(e) => e.target.style.color = '#374454'} onMouseOver={handleClick2}>
                                                    <Typography variant="h6">{sitem.title}</Typography>
                                                </MenuItem>
                                                <Menu
                                                    anchorEl={anchorEl2}
                                                    open={Boolean(anchorEl2)}
                                                    onClose={handleClose2}
                                                    MenuListProps={{
                                                        onMouseEnter: handleHover2,
                                                        onMouseLeave: handleCloseHover2,
                                                        style: { pointerEvents: "auto" }
                                                    }}
                                                    sx={{ [`&.${popoverClasses.root}`]: { pointerEvents: "none" }, }}
                                                    TransitionComponent={Fade}
                                                    PaperProps={{
                                                        sx: {
                                                            borderTop: 4,
                                                            borderColor: '#f27314',
                                                        },
                                                    }}
                                                    anchorOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'left',
                                                    }}
                                                    disableAutoFocusItem
                                                >
                                                    {sitem.subsubitems.map((ssitem, ssindex) => (
                                                        <MenuItem key={ssitem.id} sx={{ px: 3.5, pt: ssindex % 2 === 0 ? 3 : 1, pb: ssindex % 2 !== 0 ? 3 : 1, color: '#374454' }} onMouseEnter={(e) => { e.target.style.color = '#f27314'; e.target.style.backgroundColor = '#fff'; }} onMouseLeave={(e) => e.target.style.color = '#374454'} component="a" href={ssitem.url}>
                                                            <Typography variant="h6">{ssitem.title}</Typography>
                                                        </MenuItem>
                                                    ))}
                                                </Menu>
                                            </>
                                        }
                                    </Box>
                                ))}
                            </Menu>
                        </>
                    }
                </Box>
            ))}
        </Box>
    )
}

export default DesktopNavbar;