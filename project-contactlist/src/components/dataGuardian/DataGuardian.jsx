/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setContacts } from '../../redux/contactsSlice';
import useFetchData from '../../hooks/useFetchData';
import Spinner from '../../components/spinner/Spinner';

const BASE_URL = 'https://reqres.in/api/users';
const QUANTITY = 12;

const DataGuardian = ({ children }) => {
  const dispatch = useDispatch();
  const { fetchedData, error, loading } = useFetchData(
    `${BASE_URL}?per_page=${QUANTITY}`
  );

  useEffect(() => {
    const contactsFromStorage = localStorage.getItem('contacts');
    if (contactsFromStorage) {
      dispatch(setContacts(JSON.parse(contactsFromStorage)));
    } else if (!loading && !error && fetchedData && fetchedData.data) {
      localStorage.setItem('contacts', JSON.stringify(fetchedData.data));
      dispatch(setContacts(fetchedData.data));
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
