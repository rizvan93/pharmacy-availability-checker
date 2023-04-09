import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MedicineForm = () => {
  const [medicine, setMedicine] = useState({
    name: "",
    manufacturer: "",
    form: "",
    quantity: "",
    strength: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const createMedicine = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/medicines", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: ["bearer", token],
        },
        body: JSON.stringify(medicine),
      });
      if (response.ok) {
        navigate("/medicines");
      } else {
        console.log("unable to create");
      }
    };

    createMedicine();
  };

  const handleChange = (event) => {
    setMedicine({ ...medicine, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          Name:{" "}
          <input
            name="name"
            value={medicine.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Manufacturer:{" "}
          <input
            name="manufacturer"
            value={medicine.manufacturer}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Form:{" "}
          <input
            name="form"
            value={medicine.form}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Quantity:{" "}
          <input
            name="quantity"
            value={medicine.quantity}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Strength:{" "}
          <input
            name="strength"
            value={medicine.strength}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button className="mt-3 inline-block rounded-xl bg-wAqua px-3 py-1.5 text-white hover:bg-wAqua-50">
          Add New Medicine
        </button>
      </fieldset>
    </form>
  );
};

export default MedicineForm;
