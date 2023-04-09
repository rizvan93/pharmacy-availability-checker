import { Link } from "react-router-dom";
import Availability from "./NavBarButtons/Availability";
import Icon from "./NavBarButtons/Icon";

export default function BotttomNavBar({ user, page }) {
  return (
    <nav className="w-full bg-wAqua-5 px-2 py-2">
      {/* <div className="fixed inset-x-0 bottom-0 bg-wAqua-5 px-2 py-2"> */}
      <div className="container mx-auto flex items-center justify-between justify-items-center">
        <Link to="/" className="shrink">
          <Icon field="home" selected={page === "home"} />
        </Link>
        <Link
          to="/consumers/availability/pharmacists/null"
          className="shrink grow-0"
        >
          <Availability field="pharmacist" selected={page === "pharmacists"} />
        </Link>
        <Link to="/consumers/medicines" className="shrink grow-0">
          <Availability field="medicine" selected={page === "medicines"} />
        </Link>
        {user ? (
          <Link to="/consumers/bookmarks" className="shrink">
            <Icon field="bookmarks" selected={page === "bookmarks"} />
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
