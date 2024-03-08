import { Link } from "react-router-dom";
import "./errorPage.css";

function ErrorPage() {
  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__text">Page not found</p>
      <button className="error__button">
        <Link to={"/list"} className="error__link">
          Go back to the list
        </Link>
      </button>
    </section>
  );
}

export default ErrorPage;
