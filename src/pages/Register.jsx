import { useState, useEffect } from "react";
import Brand from "../components/Brand";
import Logo from '../assets/img/logo.png';
import { useNavigate } from "react-router-dom";
import AlertError from '../components/AlertError'

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    if(password != repassword){
      setError('Password and re-entered password are not the same');
      return;
    }

    if (username.trim() === '' || password.trim() === '') {
      setError('Username and password are required');
      return;
    }

    if (email.trim() === ''){
      setError('Email is required');
      return;
    }

    if (localStorage.getItem(username)) {
      setError('Username already exists');
      return;
    }

    localStorage.setItem(username, password);
    navigate('/login');
  };

  useEffect(() => {
    if (error) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      setTimeout(() => {
        setError(null)
      }, 3500);
    }
  }, [error]);

  return (
    <div className="register">
      <div className={`alert ${showAlert ? 'alert-animate' : 'alert-hidden'}`}>
        {error && <AlertError message={error} />}
      </div>
      <div className="header">
        <Brand Logo={Logo} />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input className="choco" type="text" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="choco" type="text" placeholder="USERNAME" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="choco" type="password" placeholder="PASSWORD" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className="choco" type="password" placeholder="RE-TYPE PASSWORD" value={repassword} onChange={(e) => setRepassword(e.target.value)} />

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