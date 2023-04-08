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
<form onSubmit={handleSubmit} className="flex flex-col items-center">
  <div className="mb-4 w-full max-w-sm">
    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
    </label>
    <input
      type="text"
      name="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter name/brand of medicine"
      className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <button
    type="submit"
    className="bg-wAqua text-white rounded-md px-5 py-2 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wAqua"
  >
    Search Medicines
  </button>
</form>


  );
};

export default MedNameForm;
