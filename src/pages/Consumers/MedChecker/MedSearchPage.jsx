import { useEffect, useState } from "react";
import MedCard from "./MedCard";
import MedNameForm from "./MedNameForm";
import MedSelectForm from "./MedSelectForm";

const MedAvailability = () => {
  const [medicines, setMedicines] = useState(null);

  const [medicines1, setMedicines1] = useState(null);
  useEffect(() => {
    setMedicines1(medicines);
  }, [medicines]);

  const [medicines2, setMedicines2] = useState(null);
  useEffect(() => {
    setMedicines2(medicines1);
  }, [medicines1]);

  return (
    <>
      <h1>Medicine availability</h1>;
      <MedNameForm setMedicines={setMedicines} />
      <MedSelectForm
        medicines={medicines}
        field="type"
        setMedicines={setMedicines1}
      />
      <MedSelectForm
        medicines={medicines1}
        field="packCount"
        setMedicines={setMedicines2}
      />
      {medicines2?.map((m) => (
        <MedCard medicine={m} />
      ))}
    </>
  );
};

export default MedAvailability;
