import React from 'react'
import WrapperPage from '../../components/WrapperPage'
import { Box, Typography, Grid, useMediaQuery } from '@mui/material'
import { Peach } from '../../constants/colors'
import styles from './styles'
import { useTheme } from '@mui/material/styles'
import MainButton from '../../components/MainButton'
import UvtLogo from '../../assets/photos/sponsors/Logo-emblema-UVT-14.png'
import TazzLogo from '../../assets/photos/sponsors/Tazz-by-Emag-900x0.png'
import OraluiRobert from '../../assets/photos/sponsors/Logo-oraluirobert.png'
import { MainSaladPhoto } from '../../assets/photos'

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

const OrganisationKeyPoint = ({
  title,
  icon,
  text1,
  text2,
  text3,
  button,
  buttonAction,
}) => {
  return (
    <Grid item xs={12} sm={4}>
      <Box>
        {icon}
        <Typography sx={{}}>{title}</Typography>
      </Box>
      <Typography sx={{}}>{text1}</Typography>
      <Typography sx={{}}>{text2}</Typography>
      <Typography sx={{}}>{text3}</Typography>
    </Grid>
  )
}

const AboutUs = () => {
  const theme = useTheme()
  const classes = styles(theme)

  return (
    <WrapperPage>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Box sx={classes.typoBox}>
          <Typography sx={classes.title}>
            Inspiring a new generation <br />
            by <span style={{ color: Peach }}>Fighting</span> against waste
          </Typography>
          <Typography sx={classes.smallText}>
            Fighting Hunger. Giving Hope.
          </Typography>
          <MainButton
            buttonText={'Join Us'}
            width={'325px'}
            height={'45px'}
            marginTop={'150px'}
            marginLeft={'50px'}
            to={'/login'}
            fontSize={20}
            mobileStyles={{ width: '125px', height: '20px', marginTop: '25px' }}
            mobileStylesText={{ fontSize: 12 }}
          />
        </Box>
        <MainSaladPhoto height={'95%'}></MainSaladPhoto>
      </Box>
      <Typography sx={classes.mainText}>Sponsors</Typography>
      <Grid container spacing={5} justifyContent="center">
        <SponsorLogo src={UvtLogo} alt="Uvt Logo" />
        <SponsorLogo src={TazzLogo} alt="Tazz Logo" />
        <SponsorLogo src={OraluiRobert} alt="Ora lui Robert Logo" />
      </Grid>
      <Grid container spacing={5} justifyContent="center">
        <OrganisationKeyPoint
          title={'Our Mission'}
          icon={''}
          text1={'text1'}
          text2={'text2'}
          text3={'text3'}
        />
      </Grid>
    </WrapperPage>
  )
}

export default AboutUs
