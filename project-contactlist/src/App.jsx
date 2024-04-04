/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setContacts } from './redux/contactsSlice';
import useFetchData from './hooks/useFetchData';
import Spinner from './components/spinner/Spinner';
import { BASE_URL, QUANTITY } from './utils/constants';
import {
  addToLocalStorage,
  getFromLocalStorage,
} from './services/localStorageService';
import MainLayout from './layouts/MainLayout';
import { darkModeApp, lightModeApp } from './utils/lightModeStyles';
import EmptyMessage from './components/emptyDataMessage/EmptyMessage';
import { nanoid } from 'nanoid';

function App() {
  const dispatch = useDispatch();
  const contactsFromStorage = getFromLocalStorage('contacts');
  let { fetchedData, error, loading } = useFetchData(
    `${BASE_URL}?per_page=${QUANTITY}`
  );

  useEffect(() => {
    if (contactsFromStorage) {
      dispatch(setContacts(contactsFromStorage));
    } else if (!loading && !error && fetchedData && fetchedData.data) {
      const payloadWithFavorite = fetchedData.data.map((contact) => ({
        ...contact,
        id: nanoid(),
        isFavorite: false,
      }));

      addToLocalStorage('contacts', payloadWithFavorite);
      addToLocalStorage('favorites', []);

      dispatch(setContacts(payloadWithFavorite));
    }
  }, [fetchedData]);

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

  if (loading) {
    return (
      <section className="spinner__container">
        <Spinner />
      </section>
    );
  } else if (error) {
    const errorMessage = error.message || 'Failed to fetch contacts from API.';
    return <EmptyMessage message={`Error: ${errorMessage}`} />;
  } else {
    return <MainLayout />;
  }
}

export default App;
