import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Component, requiredRoles, }) => {
  const { userRole } = useAuth();

  if (userRole === null) {
    return <div>Loading...</div>;
  }

  if (!requiredRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Component/>;
};

export default ProtectedRoute;
