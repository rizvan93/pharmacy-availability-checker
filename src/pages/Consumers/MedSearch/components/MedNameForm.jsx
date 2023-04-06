import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const MedNameForm = ({ setMedicines }) => {
  const [name, setName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const nameQuery = searchParams.get("name");
    if (nameQuery) {
      setName(nameQuery);

      const getMedicines = async () => {
        const response = await fetch(`/api/medicines?name=${name}`);
        const data = await response.json();
        setMedicines(data);
      };
      getMedicines();
      handleSubmit(null);
    }
  }, []);

  const handleSubmit = async (event) => {
    event?.preventDefault();
    const response = await fetch(`/api/medicines?name=${name}`);
    const data = await response.json();
    setMedicines(data);
    setSearchParams({ ...searchParams, name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name/Brand:{" "}
        <input
          name="name"
          value={name}
          placeholder="Enter name of medicine"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button>Search Medicines</button>
    </form>
  );
};

export default MedNameForm;
