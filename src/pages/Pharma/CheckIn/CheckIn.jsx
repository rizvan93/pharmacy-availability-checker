import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // import useParams hook
import { Link } from "react-router-dom";

export default function CheckIn() {
  const { id } = useParams(); // get the id parameter from the URL
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState("");
  const [pharmacist, setPharmacist] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`/api/pharmacists/${id}`, {
      headers: {
        Authorization: ["bearer", token],
      },
    }) // use the id parameter in the fetch URL
      .then((response) => response.json())
      .then((data) => setPharmacist(data))
      .catch((error) => console.error(error));

    fetch("/api/stores")
      .then((response) => response.json())
      .then((data) => setStores(data))
      .catch((error) => console.error(error));
  }, [id]); // add id as a dependency of the useEffect hook

  const handleSelectStore = (event) => {
    setSelectedStore(event.target.value);
  };

  const handleCheckIn = () => {
    const token = localStorage.getItem("token");
    fetch(`/api/stores/pharmacists/${selectedStore}/checkin`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: ["bearer", token],
      },
      body: JSON.stringify({ storeId: selectedStore }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Checked in successfully!");
        } else {
          alert("Failed to check in!");
        }
      })
      .catch((error) => console.error(error));
  };

  if (!pharmacist) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Link to={`/pharmacists/${id}/edit`}>
        <button>Edit Details</button>
      </Link>
      <h1>Check In</h1>
      <p>Pharmacist: {pharmacist.name}</p>
      <label>
        Select a store:
        <select value={selectedStore} onChange={handleSelectStore}>
          <option value="">-- Select a store --</option>
          {stores.map((store) => (
            <option key={store._id} value={store._id}>
              {store.name} - {store.location}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={handleCheckIn}>Check In</button>
    </>
  );
}
