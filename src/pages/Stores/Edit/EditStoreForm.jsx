import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StoreParticularsFieldset from "../components/StoreParticularsFieldset";
import MedicineStockForm from "./MedicineStockForm";

const EditStoreForm = ({ store, setStore }) => {
  const [medicines, setMedicines] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMedicines = async () => {
      const response = await fetch("/api/medicines");
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
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/stores/${store._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: ["bearer", token],
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
      <form className="ml-1 mt-14" onSubmit={handleSubmit}>
        <button className="mb-2 inline-block rounded-xl bg-wAqua px-3 py-1.5 text-white hover:bg-wAqua-50">
          Update Store
        </button>
        <fieldset>
          <legend className=" font-bold underline">Store Particulars</legend>
          <StoreParticularsFieldset form={store} setForm={setStore} />
        </fieldset>
        <fieldset className="mt-2">
          <legend className=" font-bold underline">Stocks</legend>
          {medicines?.map((medicine) => (
            <MedicineStockForm
              medicine={medicine}
              key={medicine._id}
              store={store}
              setStore={setStore}
            />
          ))}
        </fieldset>
      </form>
    </>
  );
};

export default EditStoreForm;
