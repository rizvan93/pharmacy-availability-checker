import LogoutButton from "./LogoutButton";

const LoggedInOptions = ({ setUser }) => {
  return (
    <li>
      <LogoutButton setUser={setUser} />
    </li>
  );
};

export default LoggedInOptions;
