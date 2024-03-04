import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = (url) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setFetchedData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const refetchData = () => {
    fetchData();
  };

  return { fetchedData, error, loading, refetchData };
};

export default useFetchData;
