export const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('username', username);
      localStorage.setItem('isAdmin', 'true');
      return true;
    } else if (username === 'asd' && password === 'asd') {
      localStorage.setItem('username', username);
      localStorage.setItem('isAdmin', 'false');
      return true;
    }
    return false;
};
  
export const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin');
};

export const getUser = () => {
    return {
        username: localStorage.getItem('username'),
        isAdmin: localStorage.getItem('isAdmin') === 'true'
    };
};
  
export const isAuthenticated = () => {
    return localStorage.getItem('username') !== null;
};  