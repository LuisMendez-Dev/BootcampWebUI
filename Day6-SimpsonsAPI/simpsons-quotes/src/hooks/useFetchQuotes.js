import { useEffect, useState } from "react";
import axios from "axios";

const useFetchQuotes = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
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

  const refetchQuotes = (urlAux = url) => {
    fetchData(urlAux);
  };

  return { data, error, loading, refetchQuotes };
};

export default useFetchQuotes;
