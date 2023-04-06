import { useNavigate } from "react-router-dom";
import { useState } from "react";
import userLogo from "../../../assets/user.png";
import infoLogo from "../../../assets/info.png";
import WatsonLogo from "../../../assets/WatsonLogo.png";
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

  return (
    <div className="fixed inset-x-0 top-0 bg-white px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        {backButton ? (
          <button onClick={handleBack}>BACK</button>
        ) : (
          <img src={infoLogo} width="40" />
        )}

        <img src={WatsonLogo} className="inline-block" width="80" />

        <div className="relative">
          <img src={userLogo} width="40" onClick={handleDropdown} />
          {dropdown ? (
            <ul className="absolute bg-white whitespace-nowrap">
              {user ? (
                <LoggedInOptions setUser={setUser} />
              ) : (
                <LoggedOutOptions />
              )}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
