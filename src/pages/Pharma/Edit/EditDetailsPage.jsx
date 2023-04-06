import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EditDetailsPage() {
  const { id } = useParams();
  console.log("id: ", id);

  const [stores, setStores] = useState([]);
  const [pharmacist, setPharmacist] = useState({ name: "", defaultStore: "" });
  const [updateStatus, setUpdateStatus] = useState("");

  useEffect(() => {
    const getPharmacist = async () => {
      try {
        const res = await fetch(`/api/pharmacists/${id}`);
        const data = await res.json();
        setPharmacist(data);
        console.log("pharmacist: ", pharmacist);
      } catch (error) {
        console.error(error);
      }
    };
    getPharmacist();
  }, [id]);

  useEffect(() => {
    console.log("getStores");
    const getStores = async () => {
      try {
        const res = await fetch("/api/stores");
        const data = await res.json();
        console.log("stores: ", data);
        setStores(data);
      } catch (error) {
        console.error(error);
      }
    };
    getStores();
  }, [pharmacist]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPharmacist((prevPharmacist) => ({
      ...prevPharmacist,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle submit");

    const putPharmacist = async () => {
      try {
        const res = await fetch(`/api/pharmacists/${id}`, {
          method: "PUT",
          body: JSON.stringify(pharmacist),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        console.log("updatedpharmacist: ", data);
        setUpdateStatus("Pharmacist details updated successfully.");
      } catch (error) {
        console.error(error);
      }
    };
    putPharmacist();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto py-8 px-4">
        <Link to={`/pharmacists/${id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Back</button>
        </Link>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={pharmacist.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="defaultStore">Default Store:</label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="defaultStore"
              value={pharmacist.defaultStore.name}
              onChange={handleInputChange}
            >
              {stores.map((store) => (
                <option key={store._id} value={store.name}>
                  {store.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update
            </button>
            {updateStatus && <p className="text-green-500 text-xs italic">{updateStatus}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
