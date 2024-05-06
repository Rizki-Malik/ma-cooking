import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
});

export function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  const loginHandler = (userId, token) => {
    setIsLoggedIn(true);
    setUserId(userId);
    setToken(token);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setUserId(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userId, 
        token,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext; 