import { useEffect, useState } from 'react';

import { authRef } from '../../services/firebase';
import { UserProvider } from './UserProvider';

function Providers({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    authRef.onAuthStateChanged((data) => setUser(data));
  });

  return (
    <UserProvider value={user}>
      {children}
    </UserProvider>
  );
}

export default Providers;
