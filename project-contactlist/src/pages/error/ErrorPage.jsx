import { useNavigate } from 'react-router-dom';
import './errorPage.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/');
  };

  return (
    <section className="error-page" role="alert">
      <div className="error-page__content">
        <h1 className="error-page__title">404</h1>
        <p className="error-page__text">Page not found!</p>
        <div className="error-page__actions">
          <button onClick={redirectToHome} className="error-page__button">
            Back to a safe place!
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
