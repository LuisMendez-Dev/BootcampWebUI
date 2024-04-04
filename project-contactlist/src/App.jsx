/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allContactsSelector, setContacts } from './redux/contactsSlice';
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
  const mode = useSelector((state) => state.mode.mode);
  const contacts = useSelector(allContactsSelector);
  let { fetchedData, error, loading } = useFetchData(
    `${BASE_URL}?per_page=${QUANTITY}`
  );

  useEffect(() => {
    if (contacts.length === 0) {
      const contactsFromStorage = getFromLocalStorage('contacts');
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
    }
  }, [contacts.length, loading, error, fetchedData]);

  useEffect(() => {
    if (mode === 'dark') {
      darkModeApp();
    } else {
      lightModeApp();
    }
    const savedMode = getFromLocalStorage('mode');
    if (savedMode !== mode) {
      addToLocalStorage('mode', JSON.stringify(mode));
    }
  }, [mode]);

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
