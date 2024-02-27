import { Link } from "react-router-dom";
import "./errorPage.css";

function ErrorPage() {
  return (
    <section className="error">
      <h1 className="error__number">404</h1>
      <div className="error__text">
        <h3 className="error__text--title">D&#39;OH</h3>
        <p className="error__text--paragraph">
          we could&#39;t find the page you were looking for
        </p>
      </div>
      <Link className="error__link" to="/">
        Go back to Home
      </Link>
    </section>
  );
}

export default ErrorPage;
