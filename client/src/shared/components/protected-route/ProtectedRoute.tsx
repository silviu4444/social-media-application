import { Navigate, Outlet } from 'react-router-dom';

import { RouterLinks } from 'src/shared/constants/routes/routes';

interface Props {
  isAllowed: boolean;
  children?: JSX.Element;
  redirectPath?: RouterLinks | string;
}

const ProtectedRoute = ({
  isAllowed,
  children,
  redirectPath = RouterLinks.LOGIN
}: Props) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute
