import WatsonMedi from "../../../../src/assets/WatsonMedi.png";
import WatsonPharm from "../../../../src/assets/WatsonPharm.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ConsumersMainPage({ setHome, setPage }) {
  useEffect(() => {
    setHome(true);
    setPage();
  }, []);

  return (
    <div className=" bg-wAqua-10">
      <div className="container mx-auto flex flex-col items-center justify-center p-2">
        <div className="m-2 rounded-tl-2xl bg-white p-4 shadow-md">
          <Link to="/availability/pharmacists/null">
            <p className="ml-7 text-left text-2xl font-semibold text-wPurple">
              Check pharmacist availability
            </p>
            <img src={WatsonPharm} width="800" />
          </Link>
        </div>

        <div className="m-2 rounded-tl-2xl bg-white p-4 shadow-md">
          <Link to="/consumers/medicines">
            <p className="ml-7 text-left text-2xl font-semibold text-wPurple">
              Check medicine availability
            </p>
            <img src={WatsonMedi} width="800" />
          </Link>
        </div>
      </div>
    </div>
  );
}
