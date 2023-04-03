import { Link } from "react-router-dom";

export default function ConsumersMainPage() {
  return (
    <>
      <Link to={"/consumers/pharmacists"}>
        <h1>Check Pharmacist Availability</h1>
      </Link>
      <Link to={"/consumers/medicines"}>
        <h1>Check Medicine Availability</h1>
      </Link>
    </>
  );
}
