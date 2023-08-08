import { useNavigate } from "react-router-dom";

export default function Notfound() {
  const redirect = useNavigate();
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1>404</h1>
        <h6>Page Not Found!</h6>
        <button id="backToHomeButton" onClick={() => redirect("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}
