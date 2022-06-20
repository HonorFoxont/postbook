import Navbar from './Navbar';

const AuthLayout = ({ children }) => (
  <div className="auth-layout">
    <Navbar />
    {children}
  </div>
);

export default AuthLayout;
