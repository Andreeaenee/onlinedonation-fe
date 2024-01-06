import React from 'react'
import WrapperPage from '../../components/WrapperPage'
import { Typography, Box, Grid, Button, useMediaQuery } from '@mui/material'
import { FilterIcon, SortIcon } from '../../assets/icons'
import { useTheme } from '@mui/material/styles'
import '../../styles.css'
import PlatformStyles from './PlatformStyles'
import SearchField from '../../components/SearchField'
import MainButton from '../../components/MainButton'
import OraLuiRobertJPG from '../../assets/photos/cardPhoto/OraLuiRobert.jpg'
import OraluiRobert from '../../assets/photos/sponsors/Logo-oraluirobert.png'
import ListCards from '../../components/listCards/ListCards'
import Meal from '../../assets/photos/cardPhoto/meal.png'
import RestaurantLogo from '../../assets/photos/cardPhoto/restaurantLogo.png'
import ListDonationCard from '../../components/donationCard/ListDonationCard'

const restaurants = [
  {
    title: 'Ora lui Robert',
    image: OraLuiRobertJPG,
    avatar: OraluiRobert,
    link: 'https://oraluirobert.com/',
  },
  {
    title: 'Ora lui Robert',
    image: OraLuiRobertJPG,
    avatar: OraluiRobert,
    link: 'https://oraluirobert.com/',
  },
  {
    title: 'Ora lui Robert',
    image: OraLuiRobertJPG,
    avatar: OraluiRobert,
    link: 'https://oraluirobert.com/',
  },
  {
    title: 'Ora lui Robert',
    image: OraLuiRobertJPG,
    avatar: OraluiRobert,
    link: 'https://oraluirobert.com/',
  },
  {
    title: 'Ora lui Robert',
    image: OraLuiRobertJPG,
    avatar: OraluiRobert,
    link: 'https://oraluirobert.com/',
  },
]

const oferta = [
  {
    title: '15 Menus Available',
    icon: RestaurantLogo,
    photo: Meal,
    name: 'Restaurant Nora',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '12.12.2021',
  },
  {
    title: '15 Menus Available',
    icon: RestaurantLogo,
    photo: Meal,
    name: 'Restaurant Nora',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '12.12.2021',
  },
  {
    title: '15 Menus Available',
    icon: RestaurantLogo,
    photo: Meal,
    name: 'Restaurant Nora',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '12.12.2021',
  },
  {
    title: '15 Menus Available',
    icon: RestaurantLogo,
    photo: Meal,
    name: 'Restaurant Nora',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '12.12.2021',
  },
  {
    title: '15 Menus Available',
    icon: RestaurantLogo,
    photo: Meal,
    name: 'Restaurant Nora',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '12.12.2021',
  },
  {
    title: '15 Menus Available',
    icon: RestaurantLogo,
    photo: Meal,
    name: 'Restaurant Nora',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '12.12.2021',
  },
  {
    title: '15 Menus Available',
    icon: RestaurantLogo,
    photo: Meal,
    name: 'Restaurant Nora',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '12.12.2021',
  },
]

const Platform = () => {
  const theme = useTheme()
  const classes = PlatformStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <WrapperPage>
      <Box
        sx={{
          display: 'flex',
          justifyContent: isMobile ? 'null' : 'space-between',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Grid container spacing={5} sx={classes.filterGrid}>
            <Grid
              item
              xs={6}
              sm={6}
              sx={{
                paddingLeft: '0px !important',
                paddingTop: '0px !important',
              }}
            >
              <Button sx={classes.gridButton}>
                <FilterIcon />{' '}
                {!isMobile && (
                  <Typography sx={classes.gridTypo}>Filter</Typography>
                )}
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              sx={{
                paddingLeft: '0px !important',
                paddingTop: '0px !important',
              }}
            >
              <Button sx={{ ...classes.gridButton }}>
                <SortIcon />
                {!isMobile && (
                  <Typography sx={classes.gridTypo}>Sort</Typography>
                )}
              </Button>
            </Grid>
          </Grid>
          <SearchField />
        </Box>
        {!isMobile && (
          <MainButton
            buttonText={'Post a Donation'}
            width={'250px'}
            height={'50px'}
            fontSize={18}
            margin={'50px'}
          />
        )}
      </Box>
      {isMobile && (
        <MainButton
          buttonText={'Post a Donation'}
          width={'94%'}
          height={'40px'}
          fontSize={14}
          margin={'20px'}
          borderRadius={'10px'}
        />
      )}
      <Typography sx={classes.mainText}>
        Restaurants that are donating today
      </Typography>
      <ListCards cards={restaurants} page={'Platform'} />
      <Typography sx={classes.mainText}>Oferte</Typography>
      <ListDonationCard donations={oferta} />
    </WrapperPage>
  )
}

export default Platform
