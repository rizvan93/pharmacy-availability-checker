import MedSelectOption from "./MedSelectOption";

const MedSelectForm = ({ medicines, setMedicines, field }) => {
  const uniqueOptions = new Set(medicines?.map((m) => m[field]));
  const options = Array.from(uniqueOptions);

  const handleChange = (event) => {
    const option = event.target.value;
    setMedicines(medicines.filter((m) => m[field] === option));
  };

  return (
    <form>
      <label>
        {field}:
        <select onChange={handleChange}>
          <option value="">Select {field}</option>
          {options?.map((o, index) => (
            <MedSelectOption option={o} key={index} />
          ))}
        </select>
      </label>
    </form>
  );
};

export default MedSelectForm;
