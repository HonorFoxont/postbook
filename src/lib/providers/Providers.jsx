import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authRef } from '../../services/firebase';
import authReducer from '../context/store/authReducer';
import { UserProvider } from './UserProvider';

function Providers({ children }) {
  const store = createStore(authReducer, composeWithDevTools());

  const [user, setUser] = useState();
  useEffect(() => {
    authRef.onAuthStateChanged((data) => setUser(data));
  });

  return (
    <UserProvider value={user}>
      <Provider store={store}>
        {children}
      </Provider>
    </UserProvider>
  );
}

export default Providers;
