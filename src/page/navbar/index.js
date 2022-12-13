import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import Logo from '../../logo.png';


// ========================== Start Theme Section ==========================
const theme = createTheme({
  typography: {
    h6: {
      fontFamily: 'Noto Sans Thai',
      fontWeight: 600,
      color: '#374454',
      fontSize: '1.25rem',
      [`@media screen and (max-width: 600px)`]: {
        fontSize: '0.6rem',
      },
    },
    subtitle2: {
      fontFamily: 'Noto Sans Thai',
      color: '#374454',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          fontFamily: 'Noto Sans Thai',
          fontSize: "1rem",
          color: '#374454',
          borderBottom: 'solid 3px transparent',
          borderRadius: 0,
          '&:hover': {
            backgroundColor: '#fff',
            color: '#f27314',
            borderBottom: 'solid 3px #f27314',
          },
        }),
      },
    },
  },
});
// ========================== End Theme Section ==========================


// ========================== Start Navigation Items Section ==========================
const navItems = [
  {
    title: "หน้าหลัก",
    url: "https://smartfactory.hcilab.net/",
  },
  {
    title: "บล็อก",
    url: "https://smartfactory.hcilab.net/blog/",
  },
  {
    title: "การเรียนรู้",
    url: "https://smartfactory.hcilab.net/lesson/",
  },
  {
    title: "เกี่ยวกับเรา",
    url: "https://smartfactory.hcilab.net/about-us/",
  }
]
// ========================== End Navigation Items Section ==========================


function Navbar(props) {

  // ========================== Start Dropdown Function Section ==========================
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // ========================== End Dropdown Function Section ==========================
  // ========================== Start Dropdown2 Function Section ==========================
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  // ========================== End Dropdown2 Function Section ==========================
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


  // ========================== Start Mobile Navbar Section ==========================
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
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
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  // ========================== End Mobile Navbar Section ==========================


  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={theme}>
        <AppBar component="nav" sx={{ bgcolor: "white", color: "black", boxShadow: "10px -8px 50px lightgrey" }}>
          <Toolbar sx={{ mt: 0.3, mx: { xs: 0, md: 10, xl: 40 } }}>
            <Avatar
              alt="Logo"
              src={Logo}
              component="a"
              href="/"
              sx={{ width: 32, height: 32, pr: { xs: 0, sm: 2 } }}
            />
            <Stack sx={{ flexGrow: 1, display: 'block' }}>
              <Typography variant="h6" component="a" href="/" sx={{ textDecoration: 'none' }}>Educational Smart Factory Platform</Typography>
              <Typography variant="subtitle2" component="a" href="/" sx={{ textDecoration: 'none', display: { xs: 'none', sm: 'block' }, mt: -1 }}>ระบบการเรียนรู้ระยะไกลของโรงงานอัจฉริยะ</Typography>
            </Stack>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems.map((item, index) => (
                item.title !== "การเรียนรู้"
                  ? <Button key={index} sx={{ mx: { xs: 0, md: 0.5 }, mt: 1.8, pb: 2.7 }} href={item.url}>
                    {item.title}
                  </Button>
                  : <>
                    <Button key={index} sx={{ mx: { xs: 0, md: 0.5 }, mt: 1.8, pb: 2.7 }} onMouseOver={handleClick}>
                      {item.title}
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                      MenuListProps={{ onMouseLeave: handleClose }}
                      PaperProps={{
                        sx: {
                          borderTop: 4,
                          borderColor: '#f27314',
                          mt: -0.5,
                        },
                      }}
                    >
                      <MenuItem sx={{ pl: 3.5, pt: 3, pr: 17, color: '#374454' }} onClick={handleClose} onMouseEnter={(e) => { e.target.style.color = '#f27314'; e.target.style.backgroundColor = '#fff'; }} onMouseLeave={(e) => e.target.style.color = '#374454'} component="a" href={item.url}>บทเรียน</MenuItem>
                      <MenuItem sx={{ pl: 3.5, pb: 3, pr: 17, color: '#374454' }} onClick={handleClose} onMouseEnter={(e) => { e.target.style.color = '#f27314'; e.target.style.backgroundColor = '#fff' }} onMouseLeave={(e) => e.target.style.color = '#374454'} onMouseOver={handleClick2}>หน่วยสาธิต</MenuItem>
                      <Menu
                        anchorEl={anchorEl2}
                        open={open2}
                        onClose={handleClose2}
                        TransitionComponent={Fade}
                        MenuListProps={{ onMouseLeave: handleClose2 }}
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
                      >
                        <MenuItem sx={{ px: 3.5, pt: 3, color: '#374454' }} onClick={handleClose} onMouseEnter={(e) => { e.target.style.color = '#f27314'; e.target.style.backgroundColor = '#fff'; }} onMouseLeave={(e) => e.target.style.color = '#374454'} component="a" href="https://smartfactory.hcilab.net/product-customization/">Product Customization</MenuItem>
                        <MenuItem sx={{ px: 3.5, pb: 3, color: '#374454' }} onClick={handleClose} onMouseEnter={(e) => { e.target.style.color = '#f27314'; e.target.style.backgroundColor = '#fff'; }} onMouseLeave={(e) => e.target.style.color = '#374454'} component="a" href="https://smartfactory.hcilab.net/2022/08/01/telesorting-system-api-user-manual/">TeleSorting System API <br/>User Manual</MenuItem>
                      </Menu>
                    </Menu>
                  </>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <SearchIcon fontSize='medium' sx={{ mx: { xs: 0, md: 2, lg: 4 } }} />
          </Toolbar>
        </AppBar>

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
            {drawer}
          </Drawer>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
