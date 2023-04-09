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
    <div className="flex h-screen flex-col">
      <TopNavBar backButton={!home} />
      <div className="flex h-[35rem] flex-1 flex-col items-center justify-center">
        <div>
          <p className="text-xl font-semibold text-wAqua">
            Log in for the full W+ experience
          </p>
        </div>
        <div>
          <LoginForm setUser={setUser} />
        </div>
      </div>
      <BotttomNavBar />
    </div>
  );
};

export default AuthPage;
