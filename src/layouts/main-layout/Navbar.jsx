import { signOut } from '@firebase/auth';

import { authRef } from '../../services/firebase';

const Navbar = () => {
  const logOut = () => {
    signOut(authRef);
  };
  return (
    <div className="navbar">
      <h2>Postbook</h2>
      <ul>
        <li><button className="button">HOME</button></li>
        <li><button className="button">PROFILE</button></li>
        <li><button className="button" onClick={logOut}>LOGOUT</button></li>
      </ul>
    </div>
  );
};

export default Navbar;
