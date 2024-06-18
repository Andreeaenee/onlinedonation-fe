import React, { useEffect, useState } from 'react'
import MainLayout from '../MainLayout'
import Header from '../Header'
import { Box, Tab, Tabs, Typography, useMediaQuery, Badge, Grid, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { getUsers } from '../../../api/getUsers'
import CustomTable from '../../../components/table/CustomTable'
import { UsersHeaders } from '../utils'
import SearchField from '../../../components/SearchField'
import {FilterIcon, SortIcon} from '../../../assets/icons'
import DonationsRestPageStyles from '../donations/DonationsStyles'

const Users = () => {
  const theme = useTheme()
  const classes = DonationsRestPageStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [activeTab, setActiveTab] = useState(0)
  const [userData, setUserData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [userRequests, setUserRequests] = useState([])
  let userCount = 1
  let requestCount = 1

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUserData(response)
        setFilteredData(response)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
    getUsers('status_id', 3)
      .then((response) => {
        setUserRequests(response)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const getUserType = (type_id) => {
    switch (type_id) {
      case 1:
        return 'Ong'
      case 2:
        return 'Restaurant'
      case 3:
        return 'Admin'
      default:
        return 'Unknown'
    }
  }

  const data = userData.map((user) => {
    return {
      id: userCount++,
      name: user.name,
      email: user.email,
      phone: user.phone,
      type: getUserType(user.user_type_id),
    }
  })

  const dataRequests = userRequests.map((user) => {
    return {
      id: requestCount++,
      name: user.name,
      email: user.email,
      phone: user.phone,
      type: getUserType(user.user_type_id),
    }
  })

  const handleSearch = (input) => {
    if (input.length >= 3) {
      const filtered = data.filter((user) =>
        user.name?.toLowerCase().startsWith(input.toLowerCase()) || user.email?.toLowerCase().startsWith(input.toLowerCase())
      )
      setFilteredData(filtered)
    } else {
      setFilteredData(data)
    }
  }

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  return (
    <MainLayout>
      <Header title={'Users'} />

      <Box
        sx={{
          display: isMobile ? 'null' : 'flex',
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
          <SearchField
            isDonationsDashboard={true}
            handleSearch={handleSearch}
          />
        </Box>
      </Box>

      {/* Tabs component for navigation */}
      <Box className={classes.tabsContainer}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant={isMobile ? 'scrollable' : 'standard'}
          scrollButtons={isMobile ? 'auto' : 'off'}
          aria-label="Tabs for Users and Request"
        >
          <Tab sx={{ textTransform: 'capitalize' }} label="Users" />
          <Tab
            sx={{ textTransform: 'capitalize' }}
            label={
              <Badge
                badgeContent={userRequests.length}
                color="secondary"
                variant="dot"
              >
                Requests
              </Badge>
            }
          />
        </Tabs>
      </Box>

      {/* Content based on selected tab */}
      <Box className={classes.tabContent}>
        {activeTab === 0 && (
          <Box sx={{ marginTop: '20px' }}>
            <CustomTable data={filteredData} headers={UsersHeaders} />
          </Box>
        )}
        {activeTab === 1 &&
          (userRequests.length === 0 ? (
            <Box sx={{ marginTop: '20px', marginLeft: '10px' }}>
              <Typography variant="h6">No requests found</Typography>
            </Box>
          ) : (
            <Box sx={{ marginTop: '20px' }}>
              <CustomTable data={dataRequests} headers={UsersHeaders} />
            </Box>
          ))}
      </Box>
    </MainLayout>
  )
}

export default Users
