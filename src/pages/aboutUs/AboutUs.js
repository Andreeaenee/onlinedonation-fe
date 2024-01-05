import React, { useState } from 'react'
import WrapperPage from '../../components/WrapperPage'
import { Box, Typography, Grid, useMediaQuery, Tab, Tabs } from '@mui/material'
import { Peach, White100 } from '../../constants/colors'
import styles from './styles'
import { useTheme } from '@mui/material/styles'
import MainButton from '../../components/MainButton'
import UvtLogo from '../../assets/photos/sponsors/Logo-emblema-UVT-14.png'
import TazzLogo from '../../assets/photos/sponsors/Tazz-by-Emag-900x0.png'
import OraluiRobert from '../../assets/photos/sponsors/Logo-oraluirobert.png'
import { MainSaladPhoto } from '../../assets/photos'
import { Food, Hands, Humans, ONGs, Restaurants } from '../../assets/icons'
import OraLuiRobertJPG from '../../assets/photos/cardPhoto/OraLuiRobert.jpg'
import UvtJpg from '../../assets/photos/cardPhoto/uvt.jpg'
import ListCards from '../../components/listCards/ListCards'
import CountCard from '../../components/countCards/CountCard'
import ReviewCarousel from '../../components/reviews/ReviewCarousel'

const cards = [
  {
    title: 'Ora lui Robert',
    image: OraLuiRobertJPG,
    avatar: OraluiRobert,
    link: 'https://oraluirobert.com/',
  },
  {
    title: 'UVT',
    image: UvtJpg,
    avatar: UvtLogo,
    link: 'https://www.uvt.ro/',
  },
  {
    title: 'Ora lui Robert',
    image: OraLuiRobertJPG,
    avatar: OraluiRobert,
    link: 'https://oraluirobert.com/',
  },
  {
    title: 'UVT',
    image: UvtJpg,
    avatar: UvtLogo,
    link: 'https://www.uvt.ro/',
  },
]

const reviews = [
  {
    review:
      'Review lorem ipusm knrcrkc firnvernv ejrnvrjevb rvrj fjrebf rfbjr frjeg grg jer gvgje vew vjr vrjvvrv hur vv hf fh ur fruehfue f hu fe4hfUHFRFHY UR DH',

    name: 'Jane Doe',
    avatar: UvtLogo,
    date: '12.12.2021',
  },
  {
    review:
      'Review lorem ipusm knrcrkc firnvernv ejrnvrjevb rvrj fjrebf rfbjr frjeg grg jer gvgje vew vjr vrjvvrv hur vv hf fh ur fruehfue f hu fe4hfUHFRFHY UR DH',

    name: 'Oralui Robert',
    avatar: OraluiRobert,
    date: '12.12.2021',
  },
]

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
  const theme = useTheme()
  const classes = styles(theme)
  return (
    <Grid item xs={4} sm={4}>
      <Box sx={classes.gridBox}>
        {icon}
        <Typography sx={classes.gridTitle}>{title}</Typography>
      </Box>
      <Typography sx={classes.gridText}>{text1}</Typography> <br />
      <Typography sx={classes.gridText}>{text2}</Typography>
      <br />
      <Typography sx={classes.gridText}>{text3}</Typography>
    </Grid>
  )
}

const AboutUs = () => {
  const theme = useTheme()
  const classes = styles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

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
      <Grid container spacing={5} justifyContent="center" marginBottom={'30px'}>
        <SponsorLogo src={UvtLogo} alt="Uvt Logo" />
        <SponsorLogo src={TazzLogo} alt="Tazz Logo" />
        <SponsorLogo src={OraluiRobert} alt="Ora lui Robert Logo" />
      </Grid>
      <Grid container spacing={5} justifyContent="center">
        <OrganisationKeyPoint
          title={'Restaurants'}
          icon={<Restaurants width={isMobile ? '25px' : '35px'} />}
          text1={'Donate surplus food'}
          text2={'Promotion of daily specials or charity menus'}
          text3={'Involvement in charity events or thematic campaigns'}
        />
        <Box sx={classes.verticalHr} />
        <OrganisationKeyPoint
          title={'NGOs'}
          icon={<ONGs width={isMobile ? '25px' : '35px'} />}
          text1={'Claiming and collecting food donations'}
          text2={'Publishing campaigns to meet specific needs'}
          text3={'Collaboration with restaurants for special events'}
        />
      </Grid>
      <Box sx={{ marginTop: '20px' }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
          style={classes.tabs}
        >
          <Tab
            style={{
              ...classes.tabStyles,
              backgroundColor: activeTab === 0 ? White100 : 'transparent',
            }}
            label="Participating Restaurants"
          />
          <Tab
            style={{
              ...classes.tabStyles,
              backgroundColor: activeTab === 1 ? White100 : 'transparent',
            }}
            label="Participating NGOs"
          />
        </Tabs>
      </Box>
      {activeTab === 1 && <ListCards cards={cards} />}
      <Box
        sx={{
          marginTop: '50px',
          marginBottom: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography sx={classes.mainText}>
          Reasons why we Love HOPESHARE
        </Typography>
        <CountCard
          title={'Humans Impacted'}
          bgColor={'#B9E3D9'}
          number={1000000}
          icon={<Humans />}
        />
        <CountCard
          title={'Saved Food Waste'}
          bgColor={'#A7E3B4'}
          number={1000000}
          icon={<Food />}
        />
        <CountCard
          title={'Contributors'}
          bgColor={'#82B16B'}
          number={2000}
          icon={<Hands />}
        />
        <ReviewCarousel reviews={reviews} />
      </Box>
    </WrapperPage>
  )
}

export default AboutUs
