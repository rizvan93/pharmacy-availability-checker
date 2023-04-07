import LoginForm from "./LoginForm";

const AuthPage = ({ setUser }) => {
  return (
    <>
  
    <div className="flex flex-col justify-center items-center h-[35rem]">
    <div>
      <p className="text-wAqua font-semibold text-xl">Log in for the full W+ experience</p>
    </div>
    <div>
      <LoginForm setUser={setUser} />
    </div>
  </div>
    </>
  );
};

export default AuthPage;
