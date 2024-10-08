import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Drawer,
  IconButton,
  ListItemText,
  useMediaQuery,
  List,
  ListItem,
  Divider,
} from '@mui/material'
import { Logo, LogoIcon} from '../../assets/icons/index'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Black400, Black800 } from '../../constants/colors'
import { ThemeProvider } from '@emotion/react'
import theme from '../../themes/theme'
import { Menu as MenuIcon } from '@mui/icons-material'
import NavbBarStyles from './NavbarStyles'
import { MOBILE_BREAKPOINT } from '../../constants/constants'
import { getItem, setItem } from '../../utils/LocalStorageUtils'
import { deleteCookie } from '../../utils/CookieManager'
import LanguageSwitcher from '../LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { generateButtons } from './utils'

const Navbar = () => {
  const { t } = useTranslation()
  const buttons = generateButtons(t)
  const [activeButton, setActiveButton] = useState()
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT)
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const loggedIn = getItem('loggedIn')
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const nav = useNavigate()

  const location = useLocation()

  useEffect(() => {
    const matchingButton =
      location.pathname === '/'
        ? buttons.findIndex((button) => button.label === t('aboutUsPage')) + 1
        : buttons.findIndex((button) =>
            location.pathname.includes(button.path)
          ) + 1
    setActiveButton(matchingButton)
  }, [location])

  const handleButtonClick = (index) => {
    setActiveButton(index)
    setDrawerOpen(false)
  }

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen)
  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    setItem('loggedIn', false)
    deleteCookie('jwt')
    nav('/')
    window.location.reload()
  }

  const renderButtons = (isMobile) => {
    return buttons.map(({ path, id, label }) => {
      if ((!loggedIn && (id === 3 || id === 5)) || (loggedIn && id === 4)) {
        return null
      }

      if (id === 5) {
        return (
          <ListItem key={id} sx={NavbBarStyles.buttonHover}>
            <Button
              disableRipple
              onClick={handleLogout}
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
              <div style={{ display: 'inline-block' }}>
                <ListItemText>{label}</ListItemText>
                {activeButton === id && (
                  <hr style={{ ...NavbBarStyles.hr }}></hr>
                )}
              </div>
            </Button>
          </ListItem>
        )
      }

      return (
        <ListItem key={id} sx={NavbBarStyles.buttonHover}>
          <Link to={path}>
            <Button
              disableRipple
              onClick={() => handleButtonClick(id)}
              onMouseEnter={loggedIn && id === 4 ? handleMenuOpen : undefined}
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
              <div style={{ display: 'inline-block' }}>
                <ListItemText>{label}</ListItemText>
                {activeButton === id && (
                  <hr style={{ ...NavbBarStyles.hr }}></hr>
                )}
              </div>
            </Button>
          </Link>
        </ListItem>
      )
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          ...NavbBarStyles.navBar,
          ...NavbBarStyles.fixedNavBar,
        }}
      >
        {isMobile ? (
          <>
            <Box sx={NavbBarStyles.logoBox}>
              <Link
                to="/about-us"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <LogoIcon width={'75px'} height={'75px'} />
              </Link>
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
              <Link
                to="/about-us"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <LogoIcon width={'100px'} height={'100px'} />
              </Link>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ mx: 2, height: '50px', marginTop: '15%' }}
              />
              <LanguageSwitcher />
            </Box>
            <Box sx={NavbBarStyles.buttonsBox}>{renderButtons(false)}</Box>
          </>
        )}
      </Box>
    </ThemeProvider>
  )
}

export default Navbar
