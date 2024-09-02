import React, { useEffect, useState } from 'react'
import MainLayout from '../MainLayout'
import Header from '../Header'
import { getUserId } from '../../../api/login/utils'
import { getChartStatusData, getTodaysDonations } from '../../../api/getCharts'
import { Box, Typography, useTheme } from '@mui/material'
import StatusPieChart from '../../../components/charts/StatusPieChart'
import styles from './styles'
import { calculateTotalDonations } from '../utils'
import { useTranslation } from 'react-i18next'

const DashboardAdmin = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const classes = styles(theme)
  const userId = getUserId()
  const [statusChartData, setStatusChartData] = useState([])
  const [todaysDonations, setTodaysDonations] = useState([])

  useEffect(() => {
    fetchStatusChartData(userId)
    fetchTodaysDonations()
  }, [userId])

  const fetchStatusChartData = async (id) => {
    getChartStatusData(userId)
      .then((response) => {
        if (response === 'No data found') {
          setStatusChartData([])
          return
        }
        setStatusChartData(response)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }

  const fetchTodaysDonations = async () => {
    getTodaysDonations()
      .then((response) => {
        if (response === 'No data found') {
          setTodaysDonations([])
          return
        }
        setTodaysDonations(response)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }

  return (
    <MainLayout>
      <Header title={t('dashboardPage')} />
      <Box sx={classes.chartBody}>
        {todaysDonations.length !== 0 && (
          <Box sx={classes.chartCard}>
            <Typography sx={classes.chartTitle}>
              {t('todaysDonations')} :{' '}
              {calculateTotalDonations(todaysDonations)}
            </Typography>
            <StatusPieChart data={todaysDonations} />
          </Box>
        )}
        {statusChartData.length !== 0 && (
          <Box sx={classes.chartCard}>
            <Typography sx={classes.chartTitle}>
              {t('donationStatusChart')}
            </Typography>
            <StatusPieChart data={statusChartData} />
          </Box>
        )}
      </Box>
    </MainLayout>
  )
}

export default DashboardAdmin
