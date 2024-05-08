import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react'; // For lazy loading

import AuthContext from './context/AuthContext'; // Import your AuthContext
import BlankLayout from '@layouts/BlankLayout'; // Import your BlankLayout
import { useLayout } from '@hooks/useLayout';
import { getHomeRouteForLoggedInUser, isUserLoggedIn } from '../utility/Utils';
import { getRoutes } from './routes'; // Import your routes configuration

// Lazy-loaded Components
const Error = lazy(() => import('../views/authentication/Error'));
const Login = lazy(() => import('../views/authentication/Login'));
const NotAuthorized = lazy(() => import('../views/authentication/NotAuthorized'));
const Home = lazy(() => import('./pages/Home')) // Example lazy loading
const Admin = lazy(() => import('./pages/Admin')) // Example lazy loading 

const Routera = () => { // Rename to Router for clarity
  const { layout } = useLayout();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example auth state 

  // Check authentication status on load
  useEffect(() => {
    const checkAuth = async () => {
      // Replace with your actual authentication check logic
      const storedToken = localStorage.getItem('token'); 
      if (storedToken) {
        setIsLoggedIn(true);
      }
    };
    checkAuth();
  }, []);

  const allRoutes = getRoutes(layout);

  const getHomeRoute = () => {
    if (isLoggedIn) { 
      return getHomeRouteForLoggedInUser('admin'); 
    } else {
      return '/login';
    }
  };

  return (
    <AuthContextProvider value={{ isLoggedIn, setIsLoggedIn }}> {/* Wrap with AuthContext */}
      <Routes>
        <Route path="/" index element={<Navigate replace to={getHomeRoute()} />} />
        <Route path="/login" element={<BlankLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/auth/not-auth" element={<BlankLayout />}>
          <Route path="/auth/not-auth" element={<NotAuthorized />} />
        </Route>
        <Route path="*" element={<BlankLayout />}>
          <Route path="*" element={<Error />} /> 
        </Route>
        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
        {/* ... other routes from getRoutes() */}
      </Routes>
    </AuthContextProvider>
  );
};

// Helper component for protected routes
function RequireAuth({ children }) {
  const authCtx = useContext(AuthContext);
  return authCtx.isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default Router;