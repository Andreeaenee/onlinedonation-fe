import React from 'react'
import DashboardRestaurants from './dashboard-restaurants/DashboardRestaurants'
import WrapperPage from '../../components/WrapperPage'
import DashboardOng from './dashboard-ong/DashboardOng'

const Dashboard = () => {
  return (
    <WrapperPage>
      <DashboardRestaurants />
      {/* <DashboardOng /> */}
    </WrapperPage>
  )
}

export default Dashboard
