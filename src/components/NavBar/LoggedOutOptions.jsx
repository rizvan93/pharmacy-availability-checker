import { Link } from "react-router-dom";

const LoggedOutOptions = () => {
  return (
    <>
      <li>
        <Link
          to="/login"
          className="block px-4 py-2 text-wAqua hover:bg-gray-100"
        >
          Log In
        </Link>
      </li>
      <li>
        <Link to="/" className="block px-4 py-2 text-wAqua hover:bg-gray-100">
          Sign Up
        </Link>
      </li>
    </>
  );
};

export default LoggedOutOptions;
