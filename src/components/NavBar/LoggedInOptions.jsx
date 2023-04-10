import LogoutButton from "./LogoutButton";

const LoggedInOptions = ({ user, setUser }) => {
  return (
    <>
      <li className="block px-3 py-2 text-wAqua hover:bg-gray-100">
        Welcome, {user?.name}
      </li>
      <li>
        <LogoutButton setUser={setUser} />
      </li>
    </>
  );
};

export default LoggedInOptions;
