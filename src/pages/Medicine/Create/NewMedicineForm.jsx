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
      const response = await fetch("/api/medicines", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        <label>
          Manufacturer:{" "}
          <input
            name="manufacturer"
            value={medicine.manufacturer}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Form:{" "}
          <input
            name="form"
            value={medicine.form}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Quantity:{" "}
          <input
            name="quantity"
            value={medicine.quantity}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Strength:{" "}
          <input
            name="strength"
            value={medicine.strength}
            onChange={handleChange}
            required
          />
        </label>
        <button>Add New Medicine</button>
      </fieldset>
    </form>
  );
};

export default MedicineForm;
