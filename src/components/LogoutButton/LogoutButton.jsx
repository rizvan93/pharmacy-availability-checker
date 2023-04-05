export default function LogoutButton() {

    const handleLogout = async () => {
      try {
        const response = await fetch('/api/users/logout', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          }
        });
        if (response.ok) {
          localStorage.removeItem("token");
          setUser(null);
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <button onClick={handleLogout}>Logout</button>
    );
  };
 