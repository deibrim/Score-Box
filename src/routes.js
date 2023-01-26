import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//

import DashboardHome from './pages/DashboardHome';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // {
    //   path: '/',
    //   element: <MainLayout />,
    //   children: [{ path: '/', element: <LandingPage /> }],
    // },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <DashboardHome /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    // {
    //   path: '/dashboard',
    //   element: <DashboardLayout />,
    //   children: [{ path: '/dashboard', element: <DashboardHome /> }],
    // },
    // {
    //   path: '/auth',
    //   element: <LogoOnlyLayout />,
    //   children: [
    //     { path: 'login', element: <Login /> },
    //     { path: 'register', element: <Register /> },
    //     { path: '404', element: <NotFound /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
