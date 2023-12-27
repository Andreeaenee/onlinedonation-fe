import {
  Box,
  Button,
  Drawer,
  IconButton,
  ListItemText,
  useMediaQuery,
  List,
  ListItem,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Logo } from '../../assets/icons'
import { Link, useLocation } from 'react-router-dom'
import { Black400, Black800 } from '../../constants/colors'
import { ThemeProvider } from '@emotion/react'
import theme from '../../themes/theme'
import { Menu as MenuIcon } from '@mui/icons-material'
import NavbBarStyles from './NavBarStyles'
import { MOBILE_BREAKPOINT } from '../../constants/constants'

const buttons = [
  {
    id: 1,
    label: 'Platform',
    path: '/platform',
  },
  {
    id: 2,
    label: 'About Us',
    path: '/about-us',
  },
  {
    id: 3,
    label: 'Campaigns',
    path: '/campaigns',
  },
  {
    id: 4,
    label: 'Login',
    path: '/login',
  },
]

const NavBar = () => {
  const [activeButton, setActiveButton] = useState()
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT)
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const matchingButton =
      location.pathname === '/'
        ? buttons.findIndex((button) => button.label === 'About Us') + 1
        : buttons.findIndex((button) => button.path === location.pathname) + 1
    setActiveButton(matchingButton)
  }, [location])

  const handleButtonClick = (index) => {
    setActiveButton(index)
    setDrawerOpen(false)
  }

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen)
  }

  const renderButtons = (isMobile) => {
    return buttons.map(({ path, id, label }) => (
      <ListItem key={id} sx={NavbBarStyles.buttonHover}>
        <Link to={path}>
          <Button
            disableRipple
            onClick={() => handleButtonClick(id)}
            sx={{
              ...NavbBarStyles.button,
              ...NavbBarStyles.buttonHover,
              color: activeButton === id ? Black800 : Black400,
              ...(!isMobile && {
                fontWeight: activeButton === id ? 'bold' : 'normal',
                marginTop: activeButton === id ? '10px' : '0px',
              }),
            }}
          >
            <ListItemText
              sx={{
                ...(!isMobile && {
                  fontSize: activeButton === id ? '25px' : '18px',
                }),
              }}
            >
              {label}
              {activeButton === id && <hr style={{ ...NavbBarStyles.hr }}></hr>}
            </ListItemText>
          </Button>
        </Link>
      </ListItem>
    ))
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={NavbBarStyles.navBar}>
        {isMobile ? (
          <>
            <Box sx={NavbBarStyles.logoBox}>
              <Logo width={'75px'} height={'75px'} />
            </Box>
            <Box sx={NavbBarStyles.buttonsBox}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                edge="start"
              >
                <MenuIcon width={'20px'} height={'20px'} />
              </IconButton>
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={NavbBarStyles.drawer}>
                  <List>{renderButtons(true)}</List>
                </Box>
              </Drawer>
            </Box>
          </>
        ) : (
          <>
            <Box sx={NavbBarStyles.logoBox}>
              <Logo width={'100px'} height={'100px'} />
            </Box>
            <Box sx={NavbBarStyles.buttonsBox}>{renderButtons(false)}</Box>
          </>
        )}
      </Box>
    </ThemeProvider>
  )
}

export default NavBar
