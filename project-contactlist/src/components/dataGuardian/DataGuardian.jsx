/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setContacts } from '../../redux/contactsSlice';
import useFetchData from '../../hooks/useFetchData';
import Spinner from '../../components/spinner/Spinner';
import uniqueIdGenerator from '../../utils/uniqueIdGenerator';
import { BASE_URL, QUANTITY } from '../../utils/constants';

const DataGuardian = ({ children }) => {
  const dispatch = useDispatch();
  const contactsFromStorage = localStorage.getItem('contacts');
  const { fetchedData, error, loading } = useFetchData(
    `${BASE_URL}?per_page=${QUANTITY}`
  );

  useEffect(() => {
    if (contactsFromStorage) {
      dispatch(setContacts(JSON.parse(contactsFromStorage)));
    } else if (!loading && !error && fetchedData && fetchedData.data) {
      const payloadWithFavorite = fetchedData.data.map((contact) => ({
        ...contact,
        id: uniqueIdGenerator(),
        isFavorite: false,
      }));

      localStorage.setItem('contacts', JSON.stringify(payloadWithFavorite));
      localStorage.setItem('favorites', JSON.stringify([]));

      dispatch(setContacts(payloadWithFavorite));
    }
  }, [fetchedData, error, loading, dispatch]);

  if (loading && !localStorage.getItem('contacts')) {
    return <Spinner />;
  } else if (error) {
    const errorMessage = error.message || 'Failed to fetch contacts.';
    return <div>Error: {errorMessage}</div>;
  } else {
    return <>{children}</>;
  }
};

export default DataGuardian;
