import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Component, requiredRoles, }) => {
  const { userRole } = useAuth();
  console.log('Protected Route userRole', userRole);

  if (userRole === null) {
    return <div>Loading...</div>;
  }

  if (!requiredRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Component/>;
};

export default ProtectedRoute;
