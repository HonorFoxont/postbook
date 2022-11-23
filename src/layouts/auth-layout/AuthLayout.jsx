import Navbar from './Navbar';

function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <Navbar />
      {children}
    </div>
  );
}

export default AuthLayout;
