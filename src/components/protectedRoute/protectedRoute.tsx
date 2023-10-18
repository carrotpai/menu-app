import { shallowEqual } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import { useAppSelector } from '@/store/store';
import { Roles } from '@/types/rolesTypes';

interface ProtectedRouteProps {
  forRoles: Array<Roles>;
}

function ProtectedRoute({ forRoles }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const { role, isAuthorized } = useAppSelector(
    (state) => ({
      role: state.auth.role,
      isAuthorized: state.auth.isAuthorized,
    }),
    shallowEqual
  );

  if (!isAuthorized) {
    navigate('./login');
  }

  if (!role || !forRoles.includes(role)) {
    navigate('./unauthorized');
  }

  return <Outlet />;
}

export default ProtectedRoute;
