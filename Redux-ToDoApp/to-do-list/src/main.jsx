import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import ToDoList from "./pages/ListPage/ToDoList.jsx";
import ToDoNew from "./pages/NewPage/ToDoNew.jsx";
import ToDoDetail from "./pages/DetailPage/ToDoDetail.jsx";
import ErrorPage from "./pages/errorPage/ErrorPage.jsx";
import store from "./redux/store.js";
import "./index.css";

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
