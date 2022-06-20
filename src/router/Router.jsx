import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/Signup';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
      <Route path="/signup" element={<AuthRoute><Signup /></AuthRoute>} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
        path="/home"
        element={<ProtectedRoute><Home /></ProtectedRoute>}
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
