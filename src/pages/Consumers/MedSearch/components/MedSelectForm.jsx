import MedSelectOption from "./MedSelectOption";
import { toTitleCase } from "../../../../utilities/utilities";

const MedSelectForm = ({ medicines, setMedicines, field }) => {
  const uniqueOptions = new Set(medicines?.map((m) => m[field]));
  const options = Array.from(uniqueOptions);

  const handleChange = (event) => {
    const option = event.target.value.toLowerCase();
    const filtered = medicines.filter((m) => m[field] === option);
    setMedicines(filtered);
  };

  return (
    <form>
      <label>
        {toTitleCase(field)}:{" "}
        <select onChange={handleChange}>
          {options.length > 1 ? <option value="">Select {field}</option> : null}
          {options?.map((o, index) => (
            <MedSelectOption option={toTitleCase(o)} key={index} />
          ))}
        </select>
      </label>
    </form>
  );
};

export default MedSelectForm;
