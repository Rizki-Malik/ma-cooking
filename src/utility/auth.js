export const authenticate = (username, password) => {
    const storedPassword = localStorage.getItem(username);
    if (username === 'admin' && password === 'admin') {
        return { username, isAdmin: true };
    } else if (username === 'asd' && password === 'asd') {
        return { username, isAdmin: false };
    } else if (storedPassword && storedPassword === password) {
        return { username, isAdmin: false };
    } 
    return null;
  };
  
  export const storeUser = (user) => {
    localStorage.setItem('username', user.username);
    localStorage.setItem('isAdmin', user.isAdmin? 'true' : 'false');
  };
  
  export const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin');
  };
  
  export const getUser = () => {
    const username = localStorage.getItem('username');
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    return { username, isAdmin };
  };
  
  export const isAuthenticated = () => {
    return localStorage.getItem('username')!== null;
  };