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
import OrganisationKeyPoint from './OrganisationKeyPoint'
import SponsorLogo from './SponsorLogo'
import { useTranslation } from 'react-i18next'

const cards = [
  {
    id: 1,
    title: 'Ora lui Robert',
    image: OraLuiRobertJPG,
    avatar: OraluiRobert,
    link: 'https://oraluirobert.com/',
  },
  {
    id: 2,
    title: 'UVT',
    image: UvtJpg,
    avatar: UvtLogo,
    link: 'https://www.uvt.ro/',
  },
  {
    id: 3,
    title: 'Ora lui Robert',
    image: OraLuiRobertJPG,
    avatar: OraluiRobert,
    link: 'https://oraluirobert.com/',
  },
  {
    id: 4,
    title: 'UVT',
    image: UvtJpg,
    avatar: UvtLogo,
    link: 'https://www.uvt.ro/',
  },
]

const AboutUs = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const classes = styles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  const reviews = [
    {
      review: t('reviewStefaniga'),
      name: 'Sebastian-Aurelian Ștefănigă',
      avatar: UvtLogo,
      date: '12.08.2024',
    },
    {
      review: t('reviewOraLuiRobert'),
      name: 'Ora lui Robert',
      avatar: OraluiRobert,
      date: '23.12.2024',
    },
  ]

  return (
    <WrapperPage>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', maxHeight: '600px' }}>
        <Box sx={classes.typoBox}>
          <Typography sx={classes.title}>
            {t('aboutUsText')}{' '}
            <span style={{ color: Peach }}>{t('aboutUsText2')}</span>{' '}
            {t('aboutUsText3')}
          </Typography>
          <Typography sx={classes.smallText}>{t('aboutUsText4')}</Typography>
          <MainButton
            buttonText={t('joinUs')}
            width={'325px'}
            height={'45px'}
            marginTop={'50px'}
            marginLeft={'50px'}
            to={'/login'}
            fontSize={20}
            mobileStyles={{ width: '125px', height: '20px', marginTop: '25px' }}
            mobileStylesText={{ fontSize: 12 }}
          />
        </Box>
        <MainSaladPhoto height={'100%'} />
      </Box>
      <Typography sx={classes.mainText}>{t('sponsors')}</Typography>
      <Grid container spacing={5} justifyContent="center" marginBottom={'30px'}>
        <SponsorLogo src={UvtLogo} alt="Uvt Logo" />
        <SponsorLogo src={TazzLogo} alt="Tazz Logo" />
        <SponsorLogo src={OraluiRobert} alt="Ora lui Robert Logo" />
      </Grid>
      <Grid container spacing={5} justifyContent="center">
        <OrganisationKeyPoint
          title={t('restaurants')}
          icon={<Restaurants width={isMobile ? '25px' : '35px'} />}
          text1={t('restText1')}
          text2={t('restText2')}
          text3={t('restText3')}
        />
        <Box sx={classes.verticalHr} />
        <OrganisationKeyPoint
          title={t('ngos')}
          icon={<ONGs width={isMobile ? '25px' : '35px'} />}
          text1={t('ngoText1')}
          text2={t('ngoText2')}
          text3={t('ngoText3')}
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
            label={t('participatingRestaurants')}
          />
          <Tab
            style={{
              ...classes.tabStyles,
              backgroundColor: activeTab === 1 ? White100 : 'transparent',
            }}
            label={t('participatingNGOs')}
          />
        </Tabs>
      </Box>
      {activeTab === 1 && (
        <ListCards
          cards={cards?.map((card, index) => ({
            ...card,
            key: card.id || index,
          }))}
          page={t('aboutUs')}
          // type={'MainCard'}
        />
      )}
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
        <Typography sx={classes.mainText}>{t('reasonsHopeShare')}</Typography>
        <CountCard
          title={t('humanImpacted')}
          bgColor={'#B9E3D9'}
          number={1000000}
          icon={<Humans />}
        />
        <CountCard
          title={t('savedFoodWaste')}
          bgColor={'#A7E3B4'}
          number={1000000}
          icon={<Food />}
        />
        <CountCard
          title={t('contributors')}
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
