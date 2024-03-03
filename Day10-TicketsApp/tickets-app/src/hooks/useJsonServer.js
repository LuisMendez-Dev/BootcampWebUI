import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const useApi = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async ({
    url = BASE_URL,
    method = "get",
    data = null,
  }) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await axios({ url, method, data });
      setIsLoading(false);
      return response;
    } catch (error) {
      setError(error.response ? error.response.data : error.message);
      setIsLoading(false);
      throw error;
    }
  };

  return { sendRequest, error, isLoading };
};

export default useApi;
