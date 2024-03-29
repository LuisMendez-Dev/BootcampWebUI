import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ToDoList from "./pages/ListPage/ToDoList.jsx";
import ToDoNew from "./pages/NewPage/ToDoNew.jsx";
import ToDoDetail from "./pages/DetailPage/ToDoDetail.jsx";
import "./index.css";
import ErrorPage from "./pages/errorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/list" replace={true} />,
      },
      {
        path: "/list",
        element: <ToDoList />,
      },
      {
        path: "/new",
        element: <ToDoNew />,
      },
      {
        path: "/detail/:id",
        element: <ToDoDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
