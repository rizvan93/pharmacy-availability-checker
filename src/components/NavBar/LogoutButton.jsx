import { useNavigate } from "react-router-dom";

export default function LogoutButton({ setUser }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="block bg-white px-3 py-2 text-wAqua hover:bg-gray-100"
    >
      Logout
    </button>
  );
}
