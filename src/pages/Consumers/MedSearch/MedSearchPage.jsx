import { useEffect, useState } from "react";
import BotttomNavBar from "../../../components/ConsumerNavBar/BottomNavBar";
import TopNavBar from "../../../components/ConsumerNavBar/TopNavBar";
import MedCard from "./MedCard";
import MedNameForm from "./MedNameForm";
import MedSelectForm from "./MedSelectForm";

const MedAvailability = () => {
  const [medicines, setMedicines] = useState(null);

  const [medicinesFilteredForm, setMedicinesFilteredForm] = useState(null);
  useEffect(() => {
    setMedicinesFilteredForm(medicines);
  }, [medicines]);

  const [medicinesFilteredQuantity, setMedicinesFilteredQuantity] =
    useState(null);
  useEffect(() => {
    setMedicinesFilteredQuantity(medicinesFilteredForm);
  }, [medicinesFilteredForm]);

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }; //taken from https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript

  return (
    <>
      <TopNavBar backButton={true} />
      <h1>Medicine availability</h1>;
      <MedNameForm setMedicines={setMedicines} />
      <MedSelectForm
        medicines={medicines}
        field="form"
        setMedicines={setMedicinesFilteredForm}
        toTitleCase={toTitleCase}
      />
      <MedSelectForm
        medicines={medicinesFilteredForm}
        field="quantity"
        setMedicines={setMedicinesFilteredQuantity}
        toTitleCase={toTitleCase}
      />
      {medicinesFilteredQuantity?.map((m) => (
        <MedCard medicine={m} toTitleCase={toTitleCase} />
      ))}
      <BotttomNavBar />
    </>
  );
};

export default MedAvailability;
