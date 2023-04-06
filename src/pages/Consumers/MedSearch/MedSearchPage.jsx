import { useEffect, useState } from "react";
import MedCard from "./components/MedCard";
import MedNameForm from "./components/MedNameForm";
import MedSelectForm from "./components/MedSelectForm";
import PostalCodeForm from "./components/PostalCodeForm";

const DISPLAY_LIMIT = 20;

const MedSearchPage = ({ setHome, user }) => {
  useEffect(() => {
    setHome(false);
  }, []);

  const [medicines, setMedicines] = useState(null);
  const [medicinesFilteredForm, setMedicinesFilteredForm] = useState(null);

  useEffect(() => {
    if (medicines?.length < DISPLAY_LIMIT) {
      setMedicinesFilteredForm(medicines);
    }
  }, [medicines]);

  const [medicinesFilteredQuantity, setMedicinesFilteredQuantity] =
    useState(null);

  useEffect(() => {
    if (medicinesFilteredForm?.length < DISPLAY_LIMIT)
      setMedicinesFilteredQuantity(medicinesFilteredForm);
  }, [medicinesFilteredForm]);

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }; //taken from https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript

  return (
    <>
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
        <MedCard
          medicine={m}
          toTitleCase={toTitleCase}
          key={m._id}
          id={user.accountId}
        />
      ))}
      <hr />
      <PostalCodeForm />
    </>
  );
};

export default MedSearchPage;
