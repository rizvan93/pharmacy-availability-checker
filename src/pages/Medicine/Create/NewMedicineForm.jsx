import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MedicineForm = () => {
  const [medicine, setMedicine] = useState({
    brand: "",
    type: "",
    packCount: "",
    dose: "",
    uom: "",
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
          Type:{" "}
          <input
            name="type"
            value={medicine.type}
            onChange={handleChange}
            required
          />
        </label>
                <label>
          Pack Count:{" "}
          <input
            name="packCount"
            value={medicine.packCount}
            onChange={handleChange}
            required
          />
        </label>
                <label>
          Dose:{" "}
          <input
            name="dose"
            value={medicine.dose}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          UOM:{" "}
          <input
            name="uom"
            value={medicine.uom}
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