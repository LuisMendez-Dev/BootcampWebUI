import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './errorPage.css';

const ErrorPage = () => {
  const navigate = useNavigate();
  const mode = useSelector((state) => state.mode.mode);

  const redirectToHome = () => {
    navigate('/');
  };

  return (
    <section
      className="error__page"
      style={{
        backgroundColor: mode === 'light' ? '#fff' : '#231f20',
        color: mode === 'light' ? 'black' : '#fff',
      }}
      role="alert"
    >
      <div className="error__page--content">
        <h1 className="error__page--title">404</h1>
        <p className="error__page--text">Page not found!</p>
        <div className="error__page--actions">
          <button onClick={redirectToHome} className="error__page--button">
            Back to a safe place!
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
