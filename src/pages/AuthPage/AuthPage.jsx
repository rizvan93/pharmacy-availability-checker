import LoginForm from "./LoginForm";
import { useState, useEffect } from "react";
import TopNavBar from "../../components/NavBar/Consumers/TopNavBar";
import BotttomNavBar from "../../components/NavBar/Consumers/BottomNavBar";

const AuthPage = ({ setUser }) => {
  const [home, setHome] = useState(true);
  useEffect(() => {
    setHome(false);
  }, []);

  return (
    <>
    <TopNavBar backButton={!home}/>
    <div className="flex flex-col justify-center items-center h-[35rem]">
    <div>
      <p className="text-wAqua font-semibold text-xl">Log in for the full W+ experience</p>
    </div>
    <div>
      <LoginForm setUser={setUser} />
    </div>
    <BotttomNavBar />
  </div>
    </>
  );
};

export default AuthPage;
