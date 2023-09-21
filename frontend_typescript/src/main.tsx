import * as React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import Home from './routes/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Article from './routes/Article';
import Login from './routes/Login';
import Legal from './routes/Legal';
import Signup from './routes/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/news" />,
      },
      {
        path: "/news",
        element: <Home />,
      },
      {
        path: "/news/:topic",
        element: <Home />,
      },
      {
        path: "/news/:topic/article/:id",
        element: <Article />,
      },
      {
        path: "/news/login",
        element: <Login />,
      },
      {
        path: "news/signup",
        element: <Signup />
      },
      {
        path: "/news/about",
        element: <Legal />,
      },
      {
        path: "/news/contact us",
        element: <Legal />,
      },
      {
        path: "/news/terms of use",
        element: <Legal />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
