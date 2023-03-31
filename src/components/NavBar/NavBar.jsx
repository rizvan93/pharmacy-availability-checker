import { Link } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <div>
      <nav className="bg-wAqua text-wAqua-5">
        <Link to="/users">Admin</Link>
        &nbsp; | &nbsp;
        <Link to="/stores">Stores</Link>
        &nbsp; | &nbsp;
        <Link to="/medicines">Medicine</Link>
      </nav>
      <p>Welcome, {user}!</p>
    </div>
  );
}
