import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="error-container">
      <h1 className="error-title">Oops!</h1>
      <p className="error-message">Sorry, an unexpected error has occurred.</p>
      <p className="error-detail">
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/login" className="error-link">Go back to login</a>
    </div>
  );
}