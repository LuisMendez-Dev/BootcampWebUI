const darkModeApp = () => {
  document.documentElement.style.setProperty('--primary', '#231f20');
  document.documentElement.style.setProperty('--dark-primary', '#000000');
  document.documentElement.style.setProperty('--dark-secondary', '#ffffff');
  document.documentElement.style.setProperty('--card-shadow', 'none');
  document.documentElement.style.setProperty('--card-background', '#2c2c2c');
  document.documentElement.style.setProperty('--card-footer', '#424242');
  document.documentElement.style.setProperty('--message-background', '#424242');
  document.documentElement.style.setProperty('--color-email', '#d0d0d0');
  document.documentElement.style.setProperty(
    '--color-pagination-text',
    '#d0d0d0'
  );
};

const lightModeApp = () => {
  document.documentElement.style.setProperty('--primary', '#ffffff');
  document.documentElement.style.setProperty('--dark-primary', '#231f20');
  document.documentElement.style.setProperty('--dark-secondary', '#323232');
  document.documentElement.style.setProperty('--card-shadow', '#cacaca');
  document.documentElement.style.setProperty(
    '--card-background',
    'var(--primary)'
  );
  document.documentElement.style.setProperty('--card-footer', '#cacaca');
  document.documentElement.style.setProperty('--message-background', '#f1f1f1');
  document.documentElement.style.setProperty('--color-email', '#737373');
  document.documentElement.style.setProperty(
    '--remove-icons-red',
    'var(--globant-red)'
  );
  document.documentElement.style.setProperty(
    '--color-pagination-text',
    'var(--dark-primary)'
  );
};

export { darkModeApp, lightModeApp };
