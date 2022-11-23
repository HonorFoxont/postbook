import { Navigate } from 'react-router-dom';

import MainLayout from '../layouts/main-layout/MainLayout';
import { useUser } from '../lib/providers/UserProvider';

function ProtectedRoute({ children }) {
  const user = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <MainLayout>{children}</MainLayout>;
}

export default ProtectedRoute;
