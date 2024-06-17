import React, { useEffect, useState } from 'react'
import MainLayout from '../MainLayout'
import Header from '../Header'
import { Box, Tab, Tabs, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import styles from './styles'
import { getUsers } from '../../../api/getUsers'
import CustomTable from '../../../components/table/CustomTable'
import { UsersHeaders } from '../utils'

const Users = () => {
  const theme = useTheme()
  const classes = styles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [activeTab, setActiveTab] = useState(0)
  const [userData, setUserData] = useState([])
  let count = 1

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUserData(response)
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
      id: count++,
      name: user.name,
      email: user.email,
      phone: user.phone,
      type: getUserType(user.user_type_id),
    }
  })

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  return (
    <MainLayout>
      <Header title={'Users'} />

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
          <Tab sx={{ textTransform: 'capitalize' }} label="Requests" />
        </Tabs>
      </Box>

      {/* Content based on selected tab */}
      <Box className={classes.tabContent}>
        {activeTab === 0 && (
          <Box sx={{ marginTop: '20px' }}>
            <CustomTable data={data} headers={UsersHeaders} />
          </Box>
        )}
        {activeTab === 1 && (
          <div>
            {/* Content for Request tab */}
            <p>This is the content for Request.</p>
          </div>
        )}
      </Box>
    </MainLayout>
  )
}

export default Users
