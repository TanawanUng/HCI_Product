import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import Logo from '../../logo.png';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';


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
    MuiMenuItem: {
      styleOverrides: {
        root: () => ({
          fontFamily: 'Noto Sans Thai',
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

  // ========================== Start Mobile Navbar Section ==========================
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
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

            <DesktopNavbar navItems={navItems}/>

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

        <MobileNavbar navItems={navItems} props={props} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

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
