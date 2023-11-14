import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Menu} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/Menu';
import { useState } from 'react';
import { ArrowDown, Logo } from '../../assets/icons';
import { Black800, White100 } from '../../constants/colors';
import NavbarStyles from './NavbarStyles.js';

const pages = ['Platform', 'Learn', 'Support','Login'];
const  NavBar = () => {

  return (
    <AppBar position="static" sx={NavbarStyles.appBar}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Logo sx={NavbarStyles.logo} width={'110px'} height={'50px'} />
          <Box sx={NavbarStyles.pagesBox}>
            {pages.slice(0, 3).map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={NavbarStyles.pageButton}
              >
                {page} 
                <ArrowDown
                    width={'20px'}
                    height={'20px'}
                    style={NavbarStyles.arrowButton}
                 />
              </Button>
            ))}
          </Box>

          <Box sx={NavbarStyles.loginBox}>
            <Button
            //   onClick={handleCloseNavMenu}
              sx={NavbarStyles.pageButton}
              >
              {pages[3]}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;