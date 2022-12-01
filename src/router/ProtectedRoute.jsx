import { doc, getDoc } from '@firebase/firestore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import MainLayout from '../layouts/main-layout/MainLayout';
import { useUser } from '../lib/providers/UserProvider';
import { authRef, database as db } from '../services/firebase';

function ProtectedRoute({ children }) {
  const user = useUser();
  const dispach = useDispatch();
  useEffect(() => {
    authRef.onAuthStateChanged((info) => {
      const docRef = doc(db, 'user', info.uid);
      getDoc(docRef)
        .then((userdoc) => {
          dispach({ type: 'ADD-USER', payload: userdoc.data() });
        });
    }, []);
  });

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <MainLayout>{children}</MainLayout>;
}

export default ProtectedRoute;
