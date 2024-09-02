import React, { useState, useEffect } from 'react'
import { Box, Grid, Button, Typography } from '@mui/material'
import MainLayout from '../MainLayout'
import Header from '../Header'
import { FilterIcon, SortIcon } from '../../../assets/icons'
import { useTheme } from '@mui/material/styles'
import SearchField from '../../../components/SearchField'
import { useMediaQuery } from '@mui/material'
import DonationsRestPageStyles from '../donations/DonationsStyles'
import MainButton from '../../../components/MainButton'
import { fetchDonationsData } from '../../../api/getDonations'
import ListDonationCard from '../../../components/donationCard/ListDonationCard'
import { getUserId } from '../../../api/login/utils'
import { t } from 'i18next'

const DonationsRestaurant = () => {
  const userId = getUserId()
  const theme = useTheme()
  const classes = DonationsRestPageStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    fetchDonationsData('restaurant', userId)
      .then((response) => {
        setData(response)
        setFilteredData(response)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [userId])

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
    <MainLayout>
      <Header title={t('donationsManagement')} />
      <Box
        sx={{
          display: isMobile ? 'null' : 'flex',
          justifyContent: isMobile ? 'null' : 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', margin: '20px', marginLeft: '5px' }}>
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
                {!isMobile && (
                  <Typography sx={classes.gridTypo}>Sort</Typography>
                )}
              </Button>
            </Grid>
          </Grid> */}
          <SearchField
            isDonationsDashboard={true}
            handleSearch={handleSearch}
          />
        </Box>
        {!isMobile && (
          <MainButton
            buttonText={t('postDonation')}
            width={'225px'}
            height={'45px'}
            fontSize={18}
            margin={'25px'}
            to={'/new-donation'}
          />
        )}
        {isMobile && (
          <MainButton
            buttonText={t('postDonation')}
            width={'94%'}
            height={'40px'}
            fontSize={14}
            margin={'20px'}
            borderRadius={'10px'}
            to={'/new-donation'}
          />
        )}
      </Box>
      {filteredData.length === 0 && (
        <Typography sx={{ ...classes.mainText, textAlign: 'center' }}>
          {t('noDPosted')}
        </Typography>
      )}
      <ListDonationCard donations={filteredData} page={'donations-admin'}/>
    </MainLayout>
  )
}

export default DonationsRestaurant
