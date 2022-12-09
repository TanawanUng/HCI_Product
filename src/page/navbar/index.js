import React from 'react'
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Logo from '../../logo.png';

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

const drawerWidth = 240;
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

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ m: 2 }}>
        Educational Smart Factory Platform
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={theme}>
        <AppBar component="nav" sx={{ bgcolor: "white", color: "black", boxShadow: "10px -8px 50px lightgrey" }}>
          <Toolbar sx={{ mt: 0.3, mx: { xs: 0, md: 10 } }}>
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
                <Button href={item.url} key={index} sx={{ mx: { xs: 0, md: 0.5 }, mt: 1.8, pb: 2.7 }}>
                  {item.title}
                </Button>
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
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
