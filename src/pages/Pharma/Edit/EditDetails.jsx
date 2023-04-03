import { useState, useEffect } from "react";

export default function EditDetails() {
  const [name, setName] = useState("");
  const [defaultStore, setDefaultStore] = useState("");
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const getStores = async () => {
      setName(pharamcist.name);
      setDefaultStore(pharmacist.defaultStore.name);
      try {
        const res = await fetch("api/stores");
        const data = await res.json();
      } catch (error) {
        console.error(error);
      }
    };
    getStores();
  }, [pharmacist]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDefaultStoreChange = (event) => {
    setDefaultStore(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedPharmacist = {
      name,
      defaultStore,
    };

    const putPharmacist = async () => {
      try {
        const res = await fetch(`/api/pharmacists/${pharmacist._id}`, {
          method: "PUT",
          body: JSON.stringify(updatedPharmacist),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
      } catch (error) {
        console.error(error);
        res.status(500).json({ error });
      }
      putPharmacist();
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleNameChange} />
      <br />
      <label>Default Store:</label>
      <select value={defaultStore} onChange={handleDefaultStoreChange}>
        {stores.map((store) => (
          <option key={store._id} value={store.name}>
            {store.name}
          </option>
        ))}
      </select>
      <br />
      <button type="submit">Update</button>
    </form>
  );

  // useEffect(() => {
  //   const putPharmacist = async () => {
  //     setName(pharmacist.name);
  //     setDefaultStore(pharmacist.defaultStore.name);
  //     try {
  //       const res = await fetch("/api/stores");
  //       const data = await res.json();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   putPharmacist();
  // }, []);
}
