import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MedicineStockForm from "./MedicineStockForm";

const EditStoreForm = ({ store, setStore }) => {
  const [medicines, setMedicines] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMedicines = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/medicines", {
        headers: {
          Authorization: ["bearer", token],
        },
      });
      const data = await response.json();
      setMedicines(data);
    };
    getMedicines();
  }, []);

  const handleChange = (event) => {
    setStore({ ...store, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updateStore = async () => {
      console.log(store);
      const response = await fetch(`/api/stores/${store._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(store),
      });
      //insert code to handle response here
    };
    updateStore();
    navigate("/stores");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <formfield>
          <legend>Store Particulars</legend>
          <label>
            Name:{" "}
            <input
              name="name"
              value={store?.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Location:{" "}
            <input
              name="location"
              value={store?.location}
              onChange={handleChange}
              required
            />
          </label>
        </formfield>
        <formfield>
          <legend>Stocks</legend>
          {medicines?.map((medicine) => (
            <MedicineStockForm
              medicine={medicine}
              key={medicine._id}
              store={store}
              setStore={setStore}
            />
          ))}
        </formfield>
        <button>UPDATE STORE</button>
      </form>
    </>
  );
};

export default EditStoreForm;
