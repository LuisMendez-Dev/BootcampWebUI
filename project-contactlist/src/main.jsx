import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import ErrorPage from './pages/error/ErrorPage';
import ContactsPage from './pages/contacts/ContactsPage';
import OverviewPage from './pages/overview/OverviewPage';
import DataGuardian from './components/dataGuardian/DataGuardian';
import FavoritesPage from './pages/favorites/FavoritesPage';
import './main.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <DataGuardian>
        <App />
      </DataGuardian>
    ),
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
