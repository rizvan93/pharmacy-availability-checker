import { Link } from "react-router-dom";
import { useState } from "react";
import LoggedInOptions from "./LoggedInOptions";

export default function NavBar({ user, setUser }) {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="fixed w-screen bg-wAqua py-3 text-center text-wAqua-5">
      <div className="container mx-auto ">
        <nav className="inline-block">
          {user && user.accountType !== "Pharmacist" && (
            <>
              <Link
                to="/users"
                className="rounded-md px-3 py-2 hover:bg-wAqua-50"
              >
                Admin
              </Link>
              &nbsp; | &nbsp;
              <Link
                to="/stores"
                className="rounded-md px-3 py-2 hover:bg-wAqua-50"
              >
                Stores
              </Link>
              &nbsp; | &nbsp;
              <Link
                to="/medicines"
                className="rounded-md px-3 py-2 hover:bg-wAqua-50"
              >
                Medicine
              </Link>
              &nbsp; | &nbsp;
              <span className=" inline-block list-none px-3 py-2">
                <LoggedInOptions setUser={setUser} />
              </span>
            </>
          )}
        </nav>
        <div className=" mr-3" onClick={handleDropdown}>
          Welcome, {user?.name}!
        </div>
        {/* {dropdown ? (
          <ul className="absolute right-0 top-12 rounded-md py-1 text-wAqua-5 shadow-md">
            <LoggedInOptions setUser={setUser} />
          </ul>
        ) : null} */}
      </div>
    </div>
  );
}
