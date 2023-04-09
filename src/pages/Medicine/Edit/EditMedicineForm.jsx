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
      <fieldset className="mt-20">
        <legend className="font-bold">Medicine</legend>
        <label className=" font-semibold">Name: </label>
        <input
          className="w-8/12"
          name="name"
          value={medicine.name}
          onChange={handleChange}
        />
        <br />
        <label className=" font-semibold">Manufacturer: </label>
        <input
          className=" w-8/12"
          name="manufacturer"
          value={medicine.manufacturer}
          onChange={handleChange}
        />
        <br />
        <label className=" font-semibold">Form: </label>
        <input
          className=" w-8/12"
          name="form"
          value={medicine.form}
          onChange={handleChange}
        />
        <br />
        <label className=" font-semibold">Quantity: </label>
        <input
          className=" w-8/12"
          name="quantity"
          value={medicine.quantity}
          onChange={handleChange}
        />
        <br />
        <label className=" font-semibold">Strength: </label>
        <input
          className=" w-8/12"
          name="strength"
          value={medicine.strength}
          onChange={handleChange}
        />
        <br />
        <button className="mt-4" onClick={handleUpdate}>
          Update Medicine
        </button>
      </fieldset>
    </>
  );
}
