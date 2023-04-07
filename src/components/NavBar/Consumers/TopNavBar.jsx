import { useNavigate } from "react-router-dom";
import { useState } from "react";
import userLogo from "../../../assets/user.png";
import infoLogo from "../../../assets/info.png";
import WatsonLogo from "../../../assets/WatsonLogo.png";
import backIcon from "../../../assets/buttonIcons/back.png";
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
      className={`${background} fixed left-0 top-0 z-20 block w-full px-4 py-3`}
    >
      <div className="container mx-auto flex h-10 items-center justify-between">
        <div className="w-10">
          {backButton ? (
            <button onClick={handleBack}>
              <img className="h-10" src={backIcon} />
            </button>
          ) : (
            <img src={infoLogo} className="max-h-10" />
          )}
        </div>

        <img src={WatsonLogo} className="inline-block max-h-10" />

        <div className="relative">
          <img src={userLogo} onClick={handleDropdown} className="max-h-10" />
          {dropdown ? (
            <ul className="absolute whitespace-nowrap bg-white">
              {user ? (
                <LoggedInOptions setUser={setUser} />
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
