import { createUserWithEmailAndPassword } from '@firebase/auth';
import {
  addDoc,
  collection, doc, getFirestore, setDoc,
} from '@firebase/firestore';
import { useState } from 'react';
import { useDispatch as dispach } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import app, { authRef } from '../services/firebase';

const db = getFirestore(app);
const colRef = collection(db, 'user');
function Signup() {
  const [cred, setCred] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = document.getElementById('Serror');
    const handleError = (errorText) => {
      error.style.display = 'block';
      error.textContent = errorText;
      setTimeout(() => {
        error.style.display = 'none';
        error.textContent = '';
      }, 3000);
    };
    // Validation

    if (e.target.password.value !== e.target.cPassword.value) {
      handleError('Please insert same passsword');
      return;
    }
    if (e.target.password.value.length < 6) {
      handleError('Password must have atleast 10 characters');
      return;
    }

    createUserWithEmailAndPassword(authRef, cred.email, cred.password)
      .then((res) => {
        // setDoc(doc(firestore, 'user', res.user.uid), {
        //   email: res.user.email,
        //   id: res.user.uid,
        //   name: res.user.displayName ? res.user.displayName : '',
        // });
        addDoc(colRef, {
          email: res.user.email,
          id: res.user.uid,
          name: res.user.displayName ? res.user.displayName : '',
        }).then((user) => {
          dispach({ type: 'ADD-USER', payload: user });
        });

        navigate('/home');
        e.target.reset();
      })
      .catch((err) => {
        handleError(err);
      });
  };
  return (
    <div className="Signup">
      <div className="container">
        <h2>Signup</h2>
        <p>Please fill in this form to create an account!</p>
        <form onSubmit={handleSubmit}>
          {/* <div className="form-control">
            <input type="text" placeholder="UserName" required />
          </div> */}
          <div className="form-control error" id="Serror" />
          <div className="form-control">
            <input
              type="email"
              onChange={(e) => setCred({ ...cred, email: e.target.value })}
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              onChange={(e) => setCred({ ...cred, password: e.target.value })}
              placeholder="Password"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="cPassword"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="form-control">
            <button className="button" type="submit">SignUp</button>
          </div>
        </form>
        <p>
          Already have an account?
          {' '}
          <Link href to="/Login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
