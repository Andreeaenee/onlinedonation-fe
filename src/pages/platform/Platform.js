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
import ListDonationCard from '../../components/donationCard/ListDonationCard'
import { useEffect, useState } from 'react'
import { fetchDonationsData } from '../../api/getDonations'
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

const Platform = () => {
  const theme = useTheme()
  const classes = PlatformStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [data, setData] = useState([])

  useEffect(() => {
    fetchDonationsData()
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

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
            to={'/new-donation'}
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
          to={'/new-donation'}
        />
      )}
      <Typography sx={classes.mainText}>
        Restaurants that are donating today
      </Typography>
      <ListCards cards={restaurants} page={'Platform'} />
      <Typography sx={classes.mainText}>Donations</Typography>
      {data.length === 0 && (
        <Typography sx={{ ...classes.mainText, textAlign: 'center' }}>
          There are no donations yet
        </Typography>
      )}
      <ListDonationCard donations={data} />
    </WrapperPage>
  )
}

export default Platform
