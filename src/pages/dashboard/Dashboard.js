import React, { Suspense, lazy } from 'react'
import { useAuth } from '../../components/AuthContext'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = lazy(() => import('./dashboard-admin/Dashboard'))
const OngDashboard = lazy(() => import('./dashboard-ong/Dashboard'))
const RestaurantDashboard = lazy(() =>
  import('./dashboard-restaurants/Dashboard')
)

const Dashboard = () => {
  const { userRole } = useAuth()
  const nav = useNavigate()
  let Component
  switch (userRole) {
    case 3:
      Component = AdminDashboard
      break
    case 1:
      Component = OngDashboard
      break
    case 2:
      Component = RestaurantDashboard
      break
    default:
      nav('/unauthorized')
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  )
}

export default Dashboard
