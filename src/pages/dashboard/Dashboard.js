import React from 'react'
import DashboardRestaurants from './dashboard-restaurants/DashboardRestaurants'
import WrapperPage from '../../components/WrapperPage'
import DashboardOng from './dashboard-ong/DashboardOng'
import { useAuth } from '../../components/AuthContext'

const Dashboard = () => {
  const { userRole } = useAuth();
  console.log('Dashboard UserRole:', userRole);
  return (
    <WrapperPage>
      <DashboardRestaurants />
      {/* <DashboardOng /> */}
    </WrapperPage>
  )
}

export default Dashboard
