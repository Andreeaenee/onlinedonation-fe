// Footer.js
import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FooterStyle from './FooterStyle'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../../assets/icons'

const Footer = () => {
  const theme = useTheme()
  const classes = FooterStyle(theme)

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // Adjust to column direction
          alignItems: 'center',
          justifyContent: 'center',
          height: '40vh',
        }}
      >
        <Typography sx={classes.mainText}>Follow us on social media</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '300px',
            height: '100px',
          }}
        >
          <FacebookIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <YoutubeIcon />
          <TwitterIcon />
        </Box>
        <Typography sx={classes.smallText}>
          © 2024 - All rights reserved. Created by Ene Andreea &{' '}
          <Link href="https://oraluirobert.com/">Ora lui Robert</Link>
        </Typography>
      </Box>
    </>
  )
}

export default Footer
