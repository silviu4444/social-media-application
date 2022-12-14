import { useSelector } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider
} from 'react-router-dom';

import Login from 'src/pages/authentication/components/login/Login';
import Register from 'src/pages/authentication/components/register/Register';
import HomePage from 'src/pages/home/components/home/Home';
import NewPost from 'src/pages/posts/components/new-post/NewPost';
import Profile from 'src/pages/user/components/profile/Profile';
import { UserIsAuthenticatedState } from 'src/pages/user/store/user.selectors';
import ProtectedRoute from 'src/shared/components/protected-route/ProtectedRoute';
import { RouterLinks } from 'src/shared/constants/routes/routes';
import Navigation from '../navigation/Navigation';

const AppRouter = () => {
  const isAuthenticated = useSelector(UserIsAuthenticatedState);
  const AppLayout = () => (
    <div className={isAuthenticated ? 'app-container' : undefined}>
      <Outlet />
      {isAuthenticated ? <Navigation /> : null}
    </div>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route
          path={RouterLinks.ROOT}
          element={<Navigate to={RouterLinks.HOME} replace />}
        />
        <Route
          path={RouterLinks.HOME}
          element={<ProtectedRoute isAllowed={isAuthenticated} />}
        >
          <Route index element={<HomePage />} />
        </Route>
        <Route
          element={
            <ProtectedRoute
              redirectPath={RouterLinks.HOME}
              isAllowed={!isAuthenticated}
            />
          }
        >
          <Route path={RouterLinks.SIGNUP} element={<Register />} />
          <Route path={RouterLinks.LOGIN} element={<Login />} />
        </Route>
        <Route
          path={RouterLinks.PROFILE}
          element={<ProtectedRoute isAllowed={isAuthenticated} />}
        >
          <Route index element={<Profile />} />
        </Route>
        <Route
          path={RouterLinks.NEW_POSTS}
          element={<ProtectedRoute isAllowed={isAuthenticated} />}
        >
          <Route index element={<NewPost />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
