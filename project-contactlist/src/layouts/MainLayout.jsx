import Navigation from '../components/navigation/Navigation';
import { Outlet } from 'react-router-dom';
import './mainLayout.css';

function MainLayout() {
  return (
    <>
      <header className="main-layout__header">
        <Navigation />
      </header>
      <main className="main-layout__content">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
