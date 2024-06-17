import React, { Suspense, lazy } from 'react'
import { useAuth } from '../../../components/AuthContext'
import { useNavigate } from 'react-router-dom'

const AdminDonations = lazy(() => import('../dashboard-admin/Donations'))
const OngDonations = lazy(() => import('../dashboard-ong/Donations'))
const RestaurantDonations = lazy(() =>
  import('../dashboard-restaurants/Donations')
)

const Donations = () => {
  const { userRole } = useAuth()
  const nav = useNavigate()
  let Component
  switch (userRole) {
    case 3:
      Component = AdminDonations
      break
    case 1:
      Component = OngDonations
      break
    case 2:
      Component = RestaurantDonations
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

export default Donations
