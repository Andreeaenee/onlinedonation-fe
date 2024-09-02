import React from 'react'
import WrapperPage from '../../components/WrapperPage'
import { Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import '../../styles.css'
import PlatformStyles from './PlatformStyles'
import SearchField from '../../components/SearchField'
import ListCards from '../../components/listCards/ListCards'
import ListDonationCard from '../../components/donationCard/ListDonationCard'
import { useEffect, useState } from 'react'
import { fetchDonationsData } from '../../api/getDonations'
import { getUsersToday } from '../../api/getUsers'
import { useTranslation } from 'react-i18next'

const Platform = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const classes = PlatformStyles(theme)
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetchDonationsData('status', 2)
      .then((response) => {
        setData(response)
        setFilteredData(response)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
    getUsersToday()
      .then((response) => {
        if (response === 'Users not found') {
          setRestaurants([])
          return
        }
        setRestaurants(response)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const handleSearch = (input) => {
    if (input.length >= 3) {
      const filtered = data.filter((donation) =>
        donation.name.toLowerCase().startsWith(input.toLowerCase())
      )
      setFilteredData(filtered)
    } else {
      setFilteredData(data)
    }
  }

  return (
    <WrapperPage>
      <Box sx={{ display: 'flex', margin: '20px', marginLeft: '75px' }}>
        {/* <Grid container spacing={5} sx={classes.filterGrid}>
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
              {!isMobile && <Typography sx={classes.gridTypo}>Sort</Typography>}
            </Button>
          </Grid>
        </Grid> */}
        <SearchField handleSearch={handleSearch} />
      </Box>
      {restaurants.length === 0 ? (
        <Typography sx={classes.mainText}>
          {t('noRestaurantsDonatingToday')}
        </Typography>
      ) : (
        <>
          <Typography sx={classes.mainText}>
            {t('restThatAreDonatingToday')}
          </Typography>
          <ListCards cards={restaurants} page={t('platformPage')} />
        </>
      )}
      <Typography sx={classes.mainText}>{t('donations')}</Typography>
      {filteredData.length === 0 && (
        <Typography sx={{ ...classes.mainText, textAlign: 'center' }}>
          {t('noDPosted')}
        </Typography>
      )}
      <ListDonationCard donations={filteredData} />
    </WrapperPage>
  )
}

export default Platform
