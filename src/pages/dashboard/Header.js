import React from 'react'
import { Box, Typography } from '@mui/material'
import { Black800 } from '../../constants/colors'

const Header = ({ title }) => {
  return (
    <Box
      sx={{
        marginLeft: '10px',
        marginTop: '10px',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 500, color: Black800 }}>
        {title}
      </Typography>
    </Box>
  )
}

export default Header
