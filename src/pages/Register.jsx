import { useState } from "react";
import Brand from "../components/Brand";
import Logo from '../assets/img/logo.png';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    if(password != repassword){
      setError('Password and repassword are not the same');
      return;
    }

    if (username.trim() === '' || password.trim() === '') {
      setError('Username and password are required');
      return;
    }

    if (localStorage.getItem(username)) {
      setError('Username already exists');
      return;
    }

    localStorage.setItem(username, password);
    navigate('/login');
  };

  return (
    <div className="register">
      <div className="header">
        <Brand Logo={Logo} />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input className="choco" type="text" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="choco" type="text" placeholder="USERNAME" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="choco" type="password" placeholder="PASSWORD" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className="choco" type="password" placeholder="RE-TYPE PASSWORD" value={repassword} onChange={(e) => setRepassword(e.target.value)} />

        {error && <p className="error-message">{error}</p>}

        <p className="nav-to">
          Already have an account? <a href="/login">SIGN IN!</a>
        </p>

        <div className="form-button">
          <button className="button">Sign Up</button>
        </div>
      </form>
    </div>
  );
}