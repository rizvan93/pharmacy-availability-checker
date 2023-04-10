import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StoreParticularsFieldset from "../components/StoreParticularsFieldset";

const StoreForm = () => {
  const [form, setForm] = useState({
    name: "",
    streetAddress: "",
    unitNumber: "",
    postalCode: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const createStore = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/stores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: ["bearer", token],
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        navigate("/stores");
      } else {
        console.log("unable to create");
      }
    };

    createStore();
  };

  return (
    <div className="">
      <h1 className="mb-4 font-bold">New Store</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <StoreParticularsFieldset form={form} setForm={setForm} />
          <br />
          <button className="mt-3 inline-block rounded-xl bg-wAqua px-4 py-1.5 text-white hover:bg-wAqua-50">
            Add Store
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default StoreForm;
