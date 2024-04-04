import { Navigate, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/error/ErrorPage';
import App from './App';
import OverviewPage from './pages/overview/OverviewPage';
import ContactsPage from './pages/contacts/ContactsPage';
import FavoritesPage from './pages/favorites/FavoritesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/overview" replace />,
      },
      {
        path: 'overview',
        element: <OverviewPage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
