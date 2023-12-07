import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ArrowDown, Devices, Logo, Payments, UsersManagement } from '../../assets/icons';
import NavbarStyles from './navbarStyles.js';
import { White100 } from '../../constants/colors.js';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const pages = ['Platform', 'Learn', 'Support', 'Login'];
const platformButtons = [
  {
    id: 1,
    label: "Online Donation",
    description: "Discover all the NGO’s ",
    link: '/online-donation',
    icon: <Devices />
  },
  {
    id: 2,
    label: "Donor Management",
    description: "Donor Management and Report",
    link: '/donor-management',
    icon: <UsersManagement />
  },
  {
    id: 3,
    label: "Payments",
    description: "Payment processing management",
    link: '/payments',
    icon: <Payments />
  }
];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const nav = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (link) => {
    setAnchorEl(null);
    nav(link);
  };

  return (
    <AppBar position="static" sx={NavbarStyles.appBar}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Logo sx={NavbarStyles.logo} width={'110px'} height={'50px'} />
          <Box sx={{ ...NavbarStyles.pagesBox, ...NavbarStyles.responsivePagesBox }}>
            <Button
              aria-controls="platform-menu"
              aria-haspopup="true"
              onClick={handleClick}
              sx={{ ...NavbarStyles.pageButton, ...NavbarStyles.responsivePageButton }}
            >
              {pages[0]}
              <ArrowDown
                width={'20px'}
                height={'20px'}
                style={NavbarStyles.arrowButton}
              />
            </Button>
            <Menu
              id="platform-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  width: '320px',
                  borderRadius: '8px',
                  backgroundColor: White100,
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {platformButtons.map((button) => (
                <MenuItem key={button.id} onClick={() => handleMenuItemClick(button.link)}>
                  <Box sx={NavbarStyles.menuItemBox}>
                    {button.icon}
                    <Box sx={{ marginLeft: '5px' }}>
                      <Typography sx={NavbarStyles.buttonTitle}>{button.label}</Typography>
                      <Typography sx={NavbarStyles.buttonDescription}>{button.description}</Typography>
                    </Box>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
            {pages.slice(1, 3).map((page) => (
              <Button key={page} sx={NavbarStyles.pageButton}>
                <ArrowDown
                  width={'20px'}
                  height={'20px'}
                  style={NavbarStyles.arrowButton}
                />{page}
              </Button>
            ))}
          </Box>
          <Box sx={NavbarStyles.loginBox}>
            <Button sx={{ ...NavbarStyles.pageButton, ...NavbarStyles.responsivePageButton }} onClick={() => nav('/login')}>
              {pages[3]}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
