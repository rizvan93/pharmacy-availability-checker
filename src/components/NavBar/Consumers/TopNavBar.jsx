import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { userLogo, infoLogo, watsonsLogo, backIcon } from "./navBarIcons";
import LoggedOutOptions from "../LoggedOutOptions";
import LoggedInOptions from "../LoggedInOptions";

export default function TopNavBar({ user, backButton, setUser }) {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const background = backButton ? "bg-wAqua-5" : "bg-white";

  return (
    <nav
      className={`${background} w-full px-4 py-3`}
      // className={`${background} fixed left-0 top-0 z-20 block w-full px-4 py-3`}
    >
      <div className="container mx-auto flex h-10 items-center justify-between">
        <div className="w-10">
          {backButton ? (
            <button onClick={handleBack}>
              <img className="h-10" src={backIcon} />
            </button>
          ) : (
            <Link to="/consumers/info">
              <img src={infoLogo} className="max-h-10" />
            </Link>
          )}
        </div>

        <img src={watsonsLogo} className="inline-block max-h-10" />

        <div className="relative">
          <img src={userLogo} onClick={handleDropdown} className="max-h-10" />
          {dropdown ? (
            <ul className="absolute -right-4 left-auto z-10 divide-y whitespace-nowrap border-2 bg-white">
              {user ? (
                <LoggedInOptions user={user} setUser={setUser} />
              ) : (
                <LoggedOutOptions />
              )}
            </ul>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
