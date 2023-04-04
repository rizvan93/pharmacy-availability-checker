import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditMedicineForm() {
  const { id } = useParams();
  const [medicine, setMedicine] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getMedicine = async () => {
      const response = await fetch(`/api/medicines/${id}`);
      const medicine = await response.json();
      setMedicine(medicine);
    };
    getMedicine();
  }, [id]);

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setMedicine({ ...medicine, [key]: value });
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`/api/medicines/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: ["bearer", token],
      },
      body: JSON.stringify(medicine),
    });
    navigate("/medicines");
  };

  return (
    <>
      <fieldset>
        <legend>Medicine</legend>
        <label>
          Name:
          <input name="name" value={medicine.name} onChange={handleChange} />
        </label>
        <label>
          Manufacturer:
          <input
            name="manufacturer"
            value={medicine.manufacturer}
            onChange={handleChange}
          />
        </label>
        <label>
          Form:
          <input name="form" value={medicine.form} onChange={handleChange} />
        </label>
        <label>
          Quantity:
          <input
            name="quantity"
            value={medicine.quantity}
            onChange={handleChange}
          />
        </label>
        <label>
          Strength:
          <input
            name="strength"
            value={medicine.strength}
            onChange={handleChange}
          />
        </label>
        <br />
        <button onClick={handleUpdate}>Update Medicine</button>
      </fieldset>
    </>
  );
}
