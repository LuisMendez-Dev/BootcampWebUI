import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './main.css';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not found</div>,
    children: [
      {
        index: true,
        path: 'overview',
        element: <div>Overview</div>,
      },
      {
        path: 'contacts',
        element: <div>Contacts</div>,
      },
      {
        path: 'favorites',
        element: <div>Favorites</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
