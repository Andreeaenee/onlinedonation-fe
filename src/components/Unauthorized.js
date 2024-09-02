import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Unauthorized = () => {
  const { t } = useTranslation()
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
        {t('unauthorized')}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: '1rem',
          fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
          color: '#555',
        }}
      >
        {t('unauthorizedText')}
      </Typography>
    </Box>
  )
}

export default Unauthorized
