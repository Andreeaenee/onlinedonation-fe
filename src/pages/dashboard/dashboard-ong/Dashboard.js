import React, { useEffect, useState } from 'react'
import MainLayout from '../MainLayout'
import Header from '../Header'
import { getUserId } from '../../../api/login/utils'
import { getChartStatusData } from '../../../api/getCharts'
import { Box, Typography } from '@mui/material'
import { White400 } from '../../../constants/colors'
import StatusPieChart from '../../../components/charts/StatusPieChart'

const DashboardOng = () => {
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
      <Header title={'Dashboard'} />
      {chartData.length !== 0 && (
        <Box
          sx={{
            width: '50%',
            height: '35%', // Set a fixed height
            backgroundColor: White400,
            borderRadius: '10px',
            marginTop: '30px',
            marginLeft: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow for better appearance
            padding: '20px', // Add padding
          }}
        >
          <Typography
            sx={{
              textAlign: 'left',
              marginTop: '10px', // Adjusted top margin
              fontSize: '24px', // Increase font size
              fontWeight: 'bold', // Make text bold
              color: '#333', // Darker text color for better readability
            }}
          >
            Donations Status Chart
          </Typography>
          <StatusPieChart data={chartData} />
        </Box>
      )}
    </MainLayout>
  )
}

export default DashboardOng
