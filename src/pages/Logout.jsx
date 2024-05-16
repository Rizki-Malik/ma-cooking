import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  React.useEffect(() => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    navigate('/login');
  }, []);

  return null;
}

export default Logout;