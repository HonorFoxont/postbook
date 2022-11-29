import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/login/Login';
import Profile from '../pages/Profile/Profile';
import Signup from '../pages/Signup';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';

function Router() {
  return (
    <BrowserRouter basename="postbook">
      <Routes>
        <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
        <Route path="/signup" element={<AuthRoute><Signup /></AuthRoute>} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={<ProtectedRoute><Home /></ProtectedRoute>}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute><Profile /></ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
