import './Login.scss';

import { signInWithEmailAndPassword } from '@firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { authRef } from '../../services/firebase';

function Login() {
  const [cred, setCred] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const error = document.getElementById('Lerror');
  const handleSubmit = (e) => {
    e.preventDefault();
    const handleError = (errorText) => {
      error.style.display = 'block';
      error.textContent = errorText;
      setTimeout(() => {
        error.style.display = 'none';
        error.textContent = '';
      }, 3000);
    };

    if (e.target.password.value.length < 6) {
      handleError('Password must have atleast 10 characters');
      return;
    }

    signInWithEmailAndPassword(authRef, cred.email, cred.password)
      .then((res) => {
        e.target.reset();
        navigate('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <div className="container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-control error" id="Lerror" />
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="off"
              onChange={(e) => setCred({ ...cred, email: e.target.value })}
              value={cred.email}
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={(e) => setCred({ ...cred, password: e.target.value })}
              name="password"
              required
            />
          </div>
          <div className="form-control">
            <input type="submit" className="button" value="Login" />
          </div>
        </form>
        <p>
          Not a member?
          {' '}
          <Link to="/Signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
