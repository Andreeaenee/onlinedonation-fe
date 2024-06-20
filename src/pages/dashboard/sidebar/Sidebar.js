import React, { useState, useEffect } from 'react'
import { Button, Box, Typography, IconButton } from '@mui/material'
import { SidebarButtons } from '../utils'
import {
  MountbattenPink,
  White100,
  White400,
} from '../../../constants/colors'
import { useLocation } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import SidebarStyles from './SidebarStyles'
import { useMediaQuery } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { getItem, setItem } from '../../../utils/LocalStorageUtils'
import { getUserRole } from '../../../api/login/utils'

const Sidebar = () => {
  const theme = useTheme()
  const classes = SidebarStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [activeButton, setActiveButton] = useState()
  const location = useLocation()
  const [isExpanded, setIsExpanded] = useState(getItem('sidebar-expanded'))
  const userRole = getUserRole()
  
  useEffect(() => {
    const matchingButton = SidebarButtons.findIndex(
      (button) => location.pathname === button.path
    )
    setActiveButton(matchingButton)
  }, [location])

  const handleToggleSidebar = () => {
    setIsExpanded(!isExpanded)
    setItem('sidebar-expanded', !isExpanded)
  }

  const filteredButtons = SidebarButtons.filter((button) =>
    button.role.includes(userRole)
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', minHeight: '100vh' }}>
      {isMobile ? (
        <Box sx={{ ...classes.mobileSidebar, overflowY: 'auto' }}>
          {filteredButtons.map((button, index) => (
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
        <Box
          sx={{
            ...classes.sidebar,
            overflowY: 'auto',
            width: isExpanded ? '200px' : '50px',
          }}
        >
          {filteredButtons.map((button, index) => (
            <Button
              key={index}
              startIcon={button.icon}
              sx={{
                ...(isExpanded ? classes.button : classes.buttonExpanded),
                color: activeButton === index ? MountbattenPink : White100,
                backgroundColor:
                  activeButton === index ? White400 : 'transparent',
              }}
              href={button.path}
            >
              {isExpanded && (
                <Typography sx={classes.buttonName}>{button.name}</Typography>
              )}
            </Button>
          ))}
          <IconButton onClick={handleToggleSidebar} sx={classes.toggleButton}>
            {isExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>
      )}
    </Box>
  )
}

export default Sidebar
