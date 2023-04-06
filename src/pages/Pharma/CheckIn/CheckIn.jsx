import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
export default function CheckIn() {
  const { id } = useParams();
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState("");
  const [pharmacist, setPharmacist] = useState(null);
  const navigate = useNavigate();
  const [checkedInStore, setCheckedInStore] = useState(null);
  useEffect(() => {
    const fetchPharmacistAndStores = async () => {
      try {
        const token = localStorage.getItem("token");
        const pharmacistResponse = await fetch(`/api/pharmacists/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const pharmacistData = await pharmacistResponse.json();
        setPharmacist(pharmacistData);
        setCheckedInStore(pharmacistData.checkedInStore);
        const storeResponse = await fetch("/api/stores");
        const storeData = await storeResponse.json();
        setStores(storeData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPharmacistAndStores();
  }, [id]);
  const handleSelectStore = (event) => {
    setSelectedStore(event.target.value);
  };
  const handleCheckIn = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/stores/${selectedStore}/pharmacists/${id}/checkin`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: ["bearer", token],
        },
        body: JSON.stringify({ pharmacistId: id }),
      });
      if (response.ok) {
        const updatedStore = stores.find((store) => store._id === selectedStore);
        setCheckedInStore(updatedStore);
        navigate(`/pharmacists/${id}`);
      } else {
        alert("Failed to check in!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleCheckOut = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/pharmacists/${id}/checkout`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: ["bearer", token],
        },
        body: JSON.stringify({ storeId: checkedInStore._id }),
      });
      if (response.ok) {
        setCheckedInStore(null);
        navigate(`/pharmacists/${id}`);
      } else {
        alert("Failed to check out!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (!pharmacist) {
    return <p>Loading...</p>;
  }
return (
  <>
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Link to={`/pharmacists/${id}/edit`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit Pharmacist Details</button>
        </Link>
        <h1 className="text-2xl font-bold mb-4">Check In Page</h1>
        <p className="mb-2 font-semibold">Pharmacist: {pharmacist.name}</p>
        {checkedInStore ? (
          <>
            <p className="mb-4 font-semibold">Currently checked in to: {checkedInStore.name}</p>
            <button onClick={handleCheckOut} className="bg-red-500 text-white px-4 py-2 rounded">Check Out</button>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label className="block font-semibold">Select a store:</label>
              <select value={selectedStore} onChange={handleSelectStore} disabled={!!checkedInStore} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm">
                <option value="">-- Select a store --</option>
                {stores.map((store) => (
                  <option key={store._id} value={store._id}>
                    {store.name}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={handleCheckIn} disabled={!!checkedInStore} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Check In</button>
          </>
        )}
      </div>
    </div>
  </>
);

}