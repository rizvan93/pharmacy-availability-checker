import LoginForm from "./LoginForm";

const AuthPage = ({ setUser }) => {
  return (
    <>
      <h1>Authorisation Page</h1>
      <LoginForm setUser={setUser} />
    </>
  );
};

export default AuthPage;
