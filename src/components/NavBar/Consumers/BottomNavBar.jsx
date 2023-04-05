import { Link } from "react-router-dom";

export default function BotttomNavBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-wAqua-5 px-4 py-4 text-wAqua-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="px-3 py-2 hover:border-t-2 hover:border-wAqua hover:text-wAqua"
        >
          Home
        </Link>
        <Link
          to="/consumers/pharmacists"
          className="px-3 py-2 hover:border-t-2 hover:border-wAqua hover:text-wAqua"
        >
          PHARMACIST AVAILABILITY
        </Link>
        <Link
          to="/consumers/medicines"
          className="px-3 py-2 hover:border-t-2 hover:border-wAqua hover:text-wAqua"
        >
          MEDICINE AVAILABILITY
        </Link>
        <Link
          to="/consumers/bookmarks"
          className="px-3 py-2 hover:border-t-2 hover:border-wAqua hover:text-wAqua"
        >
          Bookmarks
        </Link>
      </div>
    </div>
  );
}
