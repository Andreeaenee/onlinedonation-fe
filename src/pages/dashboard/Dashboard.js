import React, { Suspense, lazy } from 'react';
import DashboardRestaurants from './dashboard-restaurants/Dashboard'
import WrapperPage from '../../components/WrapperPage'
import { useAuth } from '../../components/AuthContext'

const AdminDashboard = lazy(() => import('./dashboard-admin/Dashboard'));
const OngDashboard = lazy(() => import('./dashboard-ong/Dashboard'));
const RestaurantDashboard = lazy(() => import('./dashboard-restaurants/Dashboard'));

const Dashboard = () => {
  const { userRole } = useAuth();
  let Component;
  switch(userRole) {
    case 3:
      Component = AdminDashboard;
      break;
    case 1:
      Component = OngDashboard;
      break;
    case 2:
      Component = RestaurantDashboard;
      break;
    default:
      return <div>Invalid role</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}

export default Dashboard
