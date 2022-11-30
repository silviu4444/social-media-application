import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Register from './pages/authentication/components/register/Register';
import HomePage from './pages/home/components/home/Home';
import { routesUrls } from './shared/constants/routes/routes';

const router = createBrowserRouter([
  {
    path: routesUrls.HOME.MAIN_PAGE,
    element: <HomePage />
  },
  {
    path: routesUrls.AUTHENTICATION.SIGNUP,
    element: <Register />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
