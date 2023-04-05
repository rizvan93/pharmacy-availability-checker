import WatsonMedi from "../../../../src/assets/WatsonMedi.png";
import WatsonPharm from "../../../../src/assets/WatsonPharm.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ConsumersMainPage({ setHome }) {
  useEffect(() => {
    setHome(true);
  }, []);

  return (
    <div className="min-h-screen bg-wAqua-10">
      <br />

      <div className="container mx-auto flex flex-col items-center justify-center p-4">
        <div className="m-4 rounded-tl-2xl bg-white p-4 shadow-md">
          <Link to="/consumers/pharmacists">
            <img src={WatsonMedi} width="800" />
          </Link>
        </div>

        <div className="rounded-tl-2xl bg-white p-4 shadow-md">
          <Link to="/consumers/medicines">
            <img src={WatsonPharm} width="800" />
          </Link>
        </div>
      </div>
    </div>
  );
}
