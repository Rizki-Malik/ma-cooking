import { useState, useEffect } from "react";
import useInput from "../utility/hooks/useInput";
import Brand from "../components/Brand";
import Logo from '../assets/img/logo.png';
import { login, getUser } from "../utility/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { value: username, onChange: handleUsernameChange } = useInput('');
  const { value: password, onChange: handlePasswordChange } = useInput('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const { username: storedUsername, isAdmin } = getUser();
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setError(null);
    
    if (username.trim() === '' || password.trim() === '') {
      setError('Username and password are required');
      return;
    }
    
    if (login(username, password)) {
      navigate(isAdmin ? '/dashboard' : '/');
      console.log(isAdmin);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login">
      <div className="header">
        <Brand Logo={Logo} />
      </div>
      <form className="form" onSubmit={onSubmitHandler}>
        <input className="choco" type="text" placeholder="USERNAME" value={username} onChange={handleUsernameChange} />
        <input className="choco" type="password" placeholder="PASSWORD" value={password} onChange={handlePasswordChange} />

        {error && <p className="error-message">{error}</p>}

        <p className="nav-to">
          Not Signing in yet? <a href="/register">SIGN UP!</a>
        </p>

        <div className="form-button">
          <button className="button">Sign In</button>
        </div>
      </form>
    </div>
  );
}