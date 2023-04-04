import { Link } from "react-router-dom";

export default function BotttomNavBar() {
  return (
    <div className="bg-wAqua-5 text-wAqua-50 py-4 px-4 fixed inset-x-0 bottom-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="hover:border-wAqua hover:border-t-2 hover:text-wAqua px-3 py-2"
        >
          Home
        </Link>
        <Link
          to="/consumers/pharmacists"
          className="hover:border-wAqua hover:border-t-2 hover:text-wAqua px-3 py-2"
        >
          PHARMACIST AVAILABILITY
        </Link>
        <Link
          to="/consumers/medicines"
          className="hover:border-wAqua hover:border-t-2 hover:text-wAqua px-3 py-2"
        >
          MEDICINE AVAILABILITY
        </Link>
        <Link
          to="/consumers/bookmark"
          className="hover:border-wAqua hover:border-t-2 hover:text-wAqua px-3 py-2"
        >
          Bookmark
        </Link>
      </div>
    </div>
  );
}
