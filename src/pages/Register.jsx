import { useState } from "react";
import Brand from "../components/Brand";
import Login from "./Login";

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    setError(null); // Reset error state

    // Basic Validation
    if (username.trim() === '' || password.trim() === '') {
      setError('Username and password are required');
      return;
    }

    // Check if username already exists (simplified)
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      setError('Username already exists');
      return;
    }

    // 'Register' new user (store in localStorage)
    localStorage.setItem(username, password);
    setRegistrationSuccess(true);

    // Clear form fields
    setUsername('');
    setPassword('');
  };

  if (registrationSuccess) {
    return <Login/>
  }

  return (
    <>
      <div className="register">
        <div className="header">
          <Brand />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="choco"
            type="text"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="choco"
            type="text"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="choco"
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="choco"
            type="password"
            placeholder="RE-TYPE PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error-message">{error}</p>}

            <p className="nav-to">
                Already have account? <a href="/register">SIGN IN!</a>
            </p>

          <div className="form-button">
            <button className="button">Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
}