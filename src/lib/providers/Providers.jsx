import { useEffect, useState } from 'react';

import { authRef } from '../../services/firebase';
import { UserProvider } from './UserProvider';

const Providers = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    authRef.onAuthStateChanged((info) => {
      setUser(info);
      console.log(info);
    });
  }, []);

  return (
    <UserProvider value={user}>
      {children}
    </UserProvider>
  );
};

export default Providers;
