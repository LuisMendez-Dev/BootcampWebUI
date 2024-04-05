import {
  addToLocalStorage,
  getFromLocalStorage,
} from '../services/localStorageService';

const toggleDarkMode = (isDarkMode) => {
  const rootElement = document.documentElement;
  if (isDarkMode) {
    rootElement.classList.add('dark-mode');
    rootElement.classList.remove('light-mode');
    addToLocalStorage('mode', 'dark');
  } else {
    rootElement.classList.add('light-mode');
    rootElement.classList.remove('dark-mode');
    addToLocalStorage('mode', 'light');
  }
};

const applyInitialColorMode = () => {
  const userPreference = getFromLocalStorage('mode');
  const systemPreference = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const isDarkMode =
    userPreference === 'dark' || (userPreference === null && systemPreference);
  toggleDarkMode(isDarkMode);
};

applyInitialColorMode();

export { toggleDarkMode };
