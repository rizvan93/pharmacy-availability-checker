import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EditDetailsPage() {
  const { id } = useParams();
  console.log("id: ", id);

  const [stores, setStores] = useState([]);
  const [pharmacist, setPharmacist] = useState({ name: "", defaultStore: "" });
  const [updateStatus, setUpdateStatus] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getPharmacist = async () => {
      try {
        const res = await fetch(`/api/pharmacists/${id}`, {
          headers: {
            Authorization: ["bearer", token],
          },
        });
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
        const res = await fetch("/api/stores", {
          headers: {
            Authorization: ["bearer", token],
          },
        });
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
            Authorization: ["bearer", token],
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
    <div className="min-h-screen bg-wAqua-10">
      <div className="mx-auto max-w-md px-4">
        <Link to={`/pharmacists/${id}`}>
          <button className="mb-4 mt-2 rounded bg-wAqua px-4 py-2 font-semibold text-white">
            Back
          </button>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
        >
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="name"
              type="text"
              name="name"
              value={pharmacist.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="defaultStore"
            >
              Default Store:
            </label>
            <select
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
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
              className=" mt-2 rounded bg-wAqua px-4 py-2 font-semibold text-white"
              type="submit"
            >
              Update
            </button>
            {updateStatus && (
              <p className="text-xs italic text-green-500">{updateStatus}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
