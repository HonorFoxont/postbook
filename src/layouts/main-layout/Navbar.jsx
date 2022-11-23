import { signOut } from '@firebase/auth';
import { Link } from 'react-router-dom';

import { authRef } from '../../services/firebase';

function Navbar() {
  const logOut = () => {
    signOut(authRef);
  };
  return (
    <div className="navbar">
      <h2>Postbook</h2>
      <ul>
        <li><Link className="button" to="/home">HOME</Link></li>
        <li><Link className="button" to="/profile">PROFILE</Link></li>
        <li><button className="button" onClick={logOut} type="button">LOGOUT</button></li>
      </ul>
    </div>
  );
}

export default Navbar;
