import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const ProtectedRoute = ({ children, redirectTo }) => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
