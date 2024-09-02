import React, { useEffect, useState } from 'react'
import MainLayout from '../MainLayout'
import Header from '../Header'
import { getUserId } from '../../../api/login/utils'
import { getChartStatusData } from '../../../api/getCharts'
import { Box, Typography } from '@mui/material'
import { White400 } from '../../../constants/colors'
import StatusPieChart from '../../../components/charts/StatusPieChart'
import { useTranslation } from 'react-i18next'

const DashboardRestaurants = () => {
  const { t } = useTranslation()
  const userId = getUserId()
  const [chartData, setChartData] = useState([])
  useEffect(() => {
    fetchStatusChartData(userId)
  }, [userId])

  const fetchStatusChartData = async (id) => {
    getChartStatusData(userId)
      .then((response) => {
        if (response === 'No data found') {
          setChartData([])
          return
        }
        setChartData(response)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }
  return (
    <MainLayout>
      <Header title={t('dashboardPage')} />
      {chartData.length !== 0 && (
        <Box
          sx={{
            width: '50%',
            height: '35%',
            backgroundColor: White400,
            borderRadius: '10px',
            marginTop: '30px',
            marginLeft: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
          }}
        >
          <Typography
            sx={{
              textAlign: 'left',
              marginTop: '10px',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            {t('donationStatusChart')}
          </Typography>
          {chartData.length !== 0 && <StatusPieChart data={chartData} />}
        </Box>
      )}
    </MainLayout>
  )
}

export default DashboardRestaurants
