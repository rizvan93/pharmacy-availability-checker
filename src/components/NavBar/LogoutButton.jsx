import { useNavigate } from "react-router-dom";

export default function LogoutButton({setUser}) {
  const navigate = useNavigate();

    const handleLogout = async () => {
          localStorage.removeItem("token");
          setUser(null);
          navigate("/");
    }
    return (
      <button onClick={handleLogout}>Logout</button>
    );
  };

 