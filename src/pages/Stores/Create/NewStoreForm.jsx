import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StoreForm = ({ addToStores }) => {
  const [form, setForm] = useState({
    name: "",
    location: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const createStore = async (setState) => {
      const response = await fetch("/api/stores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const newStore = await response.json();
    };

    createStore(addToStores);
    navigate("/stores");
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input name="name" value={form.name} onChange={handleChange} required />
      </label>
      <label>
        Location:{" "}
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          required
        />
      </label>
      <button>Add Store</button>
    </form>
  );
};

export default StoreForm;
