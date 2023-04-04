import { useState } from "react";

const MedNameForm = ({ setMedicines }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/medicines?name=${name}`);
    const data = await response.json();
    setMedicines(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name/Brand:
        <input
          name="name"
          value={name}
          placeholder="Enter name of medicine"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button>Search</button>
    </form>
  );
};

export default MedNameForm;
