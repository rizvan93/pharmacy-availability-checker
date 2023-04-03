import { Link } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <div className="bg-wAqua text-wAqua-5 py-6 text-center">
    <div className="container mx-auto">
      <nav className="inline-block">
        <Link to="/users" className="hover:bg-wAqua-50 px-3 py-2 rounded-md">Admin</Link>
        &nbsp; | &nbsp;
        <Link to="/stores" className="hover:bg-wAqua-50 px-3 py-2 rounded-md">Stores</Link>
        &nbsp; | &nbsp;
        <Link to="/medicines" className="hover:bg-wAqua-50 px-3 py-2 rounded-md">Medicine</Link>
      </nav>
      <span className="inline-block float-right mr-3">Welcome, {user}!</span>
    </div>
    </div>
  );
}
