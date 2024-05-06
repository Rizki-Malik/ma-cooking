import { useState, useEffect } from "react";
import useInput from "../utility/hooks/useInput";
import Brand from "../components/Brand";

export default function Login() {
  const { value: username, onChange: handleUsernameChange } = useInput('');
  const { value: password, onChange: handlePasswordChange } = useInput('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  // Check if user is already logged in on page load
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      setIsLoggedIn(true);
    }
  }, []);

  function onSubmitHandler(event) {
    event.preventDefault();

    setError(null); // Reset error state

    // Basic validation
    if (username.trim() === '' || password.trim() === '') {
      setError('Username and password are required');
      return;
    }

    // Simplified localStorage 'authentication'
    if (username === 'asd' && password === 'asd') { 
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      setIsLoggedIn(true);
    } else {
      setError('Invalid username or password');
    }
  }

  // If the user is logged in
  if (isLoggedIn) {
    return (
      <div>
        <h2>Welcome, {username}!</h2>
        <button onClick={() => {
          localStorage.removeItem('username');
          localStorage.removeItem('password');
          setIsLoggedIn(false);
        }}>Log Out</button>
      </div>
    );
  }

  return (
    <>
      <div className="login">
        <div className="header">
          <Brand />
        </div>
        <form className="form" onSubmit={onSubmitHandler}>
          <input className="choco" type="text" placeholder="USERNAME" value={username} onChange={handleUsernameChange} />
          <input className="choco" type="password" placeholder="PASSWORD" value={password} onChange={handlePasswordChange} />

          {error && <p className="error-message">{error}</p>} 

          <p className="nav-to">
            Not Signing in yet? <a href="/register">SIGN UP!</a>
          </p>

          <div className="form-button">
            <button className="sign-in">Sign In</button>
          </div>
        </form>
      </div>
    </>
  );
}
