
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Course from './pages/Course'
import ErrorPage from "./error-page";
import Logout from "./pages/Logout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Admin/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/courses",
    element: <Course/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/logout",
    element: <Logout />,
    errorElement: <ErrorPage />,
  },
]);

  export default Router;