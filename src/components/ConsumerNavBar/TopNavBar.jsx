import { Link } from "react-router-dom";
import user from "../../../src/assets/user.png";
import info from "../../../src/assets/info.png";

export default function TopNavBar() {
  return (
    <div className="bg-white py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="" className="inline-block text-wAqua ">
          <img src={info} width="40"/>
        </Link>
        <img src="https://flowbite.com/docs/images/logo.svg" className="inline-block"/>
        <Link to="" className="inline-block text-black ">
          <img src={user} width="40"/>
        </Link>
      </div>
    </div>
  );
}