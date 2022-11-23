import Navbar from './Navbar';

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Navbar />
      {children}
    </div>
  );
}

export default MainLayout;
