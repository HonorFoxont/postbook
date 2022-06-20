import { Navigate } from 'react-router-dom';

import AuthLayout from '../layouts/auth-layout/AuthLayout';
import { useUser } from '../lib/providers/UserProvider';

const AuthRoute = ({ children }) => {
  const user = useUser();

  if (!user) {
    return <AuthLayout>{children}</AuthLayout>;
  }

  return <Navigate to="/home" />;
};

export default AuthRoute;
