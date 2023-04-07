import { Link } from "react-router-dom";
import Availability from "./NavBarButtons/Availability";
import Icon from "./NavBarButtons/Icon";

export default function BotttomNavBar({ user, page }) {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-wAqua-5 px-2 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="basis-1/12">
          <Icon field="home" selected={page === "home"} />
        </Link>
        <Link
          to="/consumers/availability/pharmacists/null"
          className="basis-1/3"
        >
          <Availability field="pharmacist" selected={page === "pharmacists"} />
        </Link>
        <Link to="/consumers/medicines" className="basis-1/3">
          <Availability field="medicine" selected={page === "medicines"} />
        </Link>
        {user ? (
          <Link to="/consumers/bookmarks" className="basis-1/12">
            <Icon field="bookmarks" selected={page === "bookmarks"} />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
