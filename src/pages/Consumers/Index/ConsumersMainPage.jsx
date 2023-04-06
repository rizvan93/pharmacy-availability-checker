import WatsonMedi from "../../../../src/assets/WatsonMedi.png";
import WatsonPharm from "../../../../src/assets/WatsonPharm.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ConsumersMainPage({ user, setUser, setHome }) {
  useEffect(() => {
    setHome(true);
  }, []);

  return (
    <div className="min-h-screen bg-wAqua-10">
      <br />

      <div className="container mx-auto flex flex-col items-center justify-center p-4">
        <div className="m-4 rounded-tl-2xl bg-white p-4 shadow-md">
          <Link to="/consumers/pharmacists">
          <p className="text-4xl text-[#3A1730] text-center">Check pharmacist availability</p>
            <img src={WatsonPharm} width="800" />
          </Link>
        </div>

        <div className="m-4 rounded-tl-2xl bg-white p-4 shadow-md">
          <Link to="/consumers/medicines">
          <p className="text-4xl text-[#3A1730] text-center">Check medicine availability</p>
            <img src={WatsonMedi} width="800" />
          </Link>
        </div>
      </div>
    </div>
  );
}
