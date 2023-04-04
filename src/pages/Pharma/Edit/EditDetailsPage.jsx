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
        res.status(500).json({ error });
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
        res.status(500).json({ error });
      }
    };
    putPharmacist();
  };

  return (
    <>
      <Link to={`/pharmacists/${id}`}>
        <button>Back</button>
      </Link>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={pharmacist.name}
          onChange={handleInputChange}
        />
        <br />
        <label>Default Store:</label>
        <select name="defaultStore" onChange={handleInputChange}>
          {stores.map((store) => (
            <option
              value={store.name}
              selected={store.name === pharmacist.defaultStore.name}
            >
              {store.name}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Update</button>
        <br />
        {updateStatus && <p>{updateStatus}</p>}
      </form>
    </>
  );
}
