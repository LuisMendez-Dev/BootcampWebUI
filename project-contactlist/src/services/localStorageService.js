const addToLocalStorage = (key, value) => {
  if (typeof value === 'object') {
    try {
      value = JSON.stringify(value);
    } catch (error) {
      throw new Error(error);
    }
  }
  localStorage.setItem(key, value);
};

const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};

export { addToLocalStorage, getFromLocalStorage };
