import React from 'react'
import { Box } from '@mui/material'

const WrapperPage = ({ children }) => {
  return (
    <Box sx={{zIndex: 10}}>
      {children}
    </Box>
  )
}

export default WrapperPage
