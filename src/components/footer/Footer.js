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
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const theme = useTheme()
  const classes = FooterStyle(theme)
  const { t } = useTranslation()

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '400px',
        }}
      >
        <Typography sx={classes.mainText}>{t('footerSocials')}</Typography>
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
          {t('footer')} Ene Andreea &{' '}
          <Link href="https://oraluirobert.com/">Ora lui Robert</Link>
        </Typography>
      </Box>
    </>
  )
}

export default Footer
