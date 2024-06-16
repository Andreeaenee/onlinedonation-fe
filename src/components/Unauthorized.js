import React from 'react'
import { Box, Typography } from '@mui/material'

const Unauthorized = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
          fontWeight: 'bold',
          color: '#d32f2f',
        }}
      >
        Unauthorized
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: '1rem',
          fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
          color: '#555',
        }}
      >
        You do not have permission to view this page.
      </Typography>
    </Box>
  )
}

export default Unauthorized
