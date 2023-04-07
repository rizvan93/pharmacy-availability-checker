import { useEffect, useState } from "react";
import MedCard from "./components/MedCard";
import MedNameForm from "./components/MedNameForm";
import MedSelectForm from "./components/MedSelectForm";
import PostalCodeForm from "./components/PostalCodeForm";

const DISPLAY_LIMIT = 20;

const MedSearchPage = ({ setHome, user, setPage }) => {
  useEffect(() => {
    setHome(false);
    setPage();
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

  return (
    <>
      <h1>Medicine availability</h1>;
      <MedNameForm setMedicines={setMedicines} />
      <MedSelectForm
        medicines={medicines}
        field="form"
        setMedicines={setMedicinesFilteredForm}
      />
      <MedSelectForm
        medicines={medicinesFilteredForm}
        field="quantity"
        setMedicines={setMedicinesFilteredQuantity}
      />
      {medicinesFilteredQuantity?.map((m) => (
        <MedCard medicine={m} key={m._id} id={user?.accountId} />
      ))}
      <hr />
      <PostalCodeForm />
    </>
  );
};

export default MedSearchPage;
