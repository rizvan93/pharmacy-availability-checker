import { Link, useNavigate } from "react-router-dom";
import userLogo from "../../../src/assets/user.png";
import infoLogo from "../../../src/assets/info.png";

export default function TopNavBar({ user, backButton }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-white py-3 fixed inset-x-0 top-0">
      <div className="container mx-auto flex justify-between items-center">
        {backButton ? (
          <button onClick={handleBack}>BACK</button>
        ) : (
          <Link to="" className="inline-block text-wAqua ">
            <img src={infoLogo} width="40" />
          </Link>
        )}
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="inline-block"
        />
        <Link to="" className="inline-block text-black ">
          <img src={userLogo} width="40" />
        </Link>
      </div>
    </div>
  );
}
