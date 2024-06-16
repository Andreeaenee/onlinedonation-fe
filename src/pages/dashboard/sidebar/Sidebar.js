import React from 'react'
import { Button, Box, Typography } from '@mui/material'
import { SidebarButtons } from '../utils'
import { MountbattenPink, White100, White400 } from '../../../constants/colors'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import SidebarStyles from './SidebarStyles'
import { useMediaQuery } from '@mui/material'

const Sidebar = () => {
  const theme = useTheme()
  const classes = SidebarStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [activeButton, setActiveButton] = useState()
  const location = useLocation()

  useEffect(() => {
    const matchingButton = SidebarButtons.findIndex(
      (button) => location.pathname === button.path
    )
    setActiveButton(matchingButton)
  }, [location])

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {isMobile ? (
      <Box sx={classes.mobileSidebar}>
        {SidebarButtons.map((button, index) => (
          <Button
            key={index}
            startIcon={button.icon}
            sx={{
              ...classes.button,
              color: activeButton === index ? MountbattenPink : White100,
              backgroundColor:
                activeButton === index ? White400 : 'transparent',
            }}
            href={button.path}
          ></Button>
        ))}
      </Box>
      ) : (
      <Box sx={classes.sidebar}>
        {SidebarButtons.map((button, index) => (
          <Button
            key={index}
            startIcon={button.icon}
            sx={{
              ...classes.button,
              color: activeButton === index ? MountbattenPink : White100,
              backgroundColor:
                activeButton === index ? White400 : 'transparent',
            }}
            href={button.path}
          >
            <Typography sx={classes.buttonName}>{button.name}</Typography>
          </Button>
        ))}
      </Box>
      )}
    </Box>
  )
}

export default Sidebar
