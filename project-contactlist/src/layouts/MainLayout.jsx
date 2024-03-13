import Navigation from '../components/navigation/Navigation';
import { Outlet } from 'react-router-dom';
import './mainLayout.css';

function MainLayout() {
  return (
    <>
      <header className="main__layout-header">
        <Navigation />
      </header>
      <main className="main__layout-content">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
