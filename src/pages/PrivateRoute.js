import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) return <Navigate to="/login" />;

  return children;
};

export default PrivateRoute;

// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ isAllowed, redirectPath = '/landing', children }) => {
//   if (!isAllowed) return <Navigate to={redirectPath} />;
//   return children;
// };

// export default ProtectedRoute
