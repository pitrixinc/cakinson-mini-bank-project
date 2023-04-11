import React from 'react';
import useAuth from '../custom-hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {

  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to='/login'/>;
  }

  if (currentUser.uid !== 'rJjROQIOGHMVu22md9VsGQphfPZ2') {
    return <Navigate to='/dashboard' />;
  }

  return <Outlet />;
};

export default AdminRoute;
