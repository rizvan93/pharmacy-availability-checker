import { Link } from "react-router-dom";
import { useState } from "react";
import LoggedInOptions from "./LoggedInOptions";

export default function NavBar({ user, setUser }) {
  const [dropdown, setDropdown] = useState(false)

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="bg-wAqua text-wAqua-5 py-6 text-center">
      <div className="container mx-auto">
        <nav className="inline-block">
          <Link to="/users" className="hover:bg-wAqua-50 px-3 py-2 rounded-md">
            Admin
          </Link>
          &nbsp; | &nbsp;
          <Link to="/stores" className="hover:bg-wAqua-50 px-3 py-2 rounded-md">
            Stores
          </Link>
          &nbsp; | &nbsp;
          <Link
            to="/medicines"
            className="hover:bg-wAqua-50 px-3 py-2 rounded-md"
          >
            Medicine
          </Link>
        </nav>
        <span className="inline-block float-right mr-3" onClick={handleDropdown}>
          Welcome, {user?.name}!
        </span>
        {dropdown ? (
          <ul className="absolute right-0 top-12 text-wAqua-5 rounded-md shadow-md py-1" >
            <LoggedInOptions setUser={setUser} />
          </ul>
        ):null}
      </div>
    </div>  
  );
}
