import React from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'


const SponsorLogo = ({ src, alt }) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  
    return (
      <Grid item xs={4} sm={3}>
        <img
          src={src}
          alt={alt}
          style={{ height: 'auto', width: isMobile ? '150px' : '300px' }}
        />
      </Grid>
    )
  }

  export default SponsorLogo