import { Navigate } from 'react-router';
import { getToken, getUser } from '../utils/storage';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const token = getToken();
  const user = getUser();

  if (!token) {
    return <Navigate to='/login' replace />;
  }

  if (requireAdmin && user?.role !== 'admin') {
    return <Navigate to='/dashboard' replace />;
  }

  return children;
};

export default ProtectedRoute;
