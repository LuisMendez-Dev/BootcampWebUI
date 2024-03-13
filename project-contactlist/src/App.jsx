import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import { useDispatch } from 'react-redux';
import { darkModeApp, lightModeApp } from './utils/lightModeStyles';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem('mode'));
    if (savedMode === 'dark') {
      darkModeApp();
    } else {
      if (!savedMode) {
        localStorage.setItem('mode', JSON.stringify('light'));
      }
      lightModeApp();
    }
  }, [dispatch]);

  return <MainLayout />;
}

export default App;
