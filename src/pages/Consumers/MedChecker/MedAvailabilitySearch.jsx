import { Link } from "react-router-dom";

export default function MedAvailabilitySearch() {
  return (
    <>
      <h2>Medicine Dropdown List</h2>
      <Link to={"/consumers/medicines/available"}>
        <button>Search</button>
      </Link>
    </>
  );
}
