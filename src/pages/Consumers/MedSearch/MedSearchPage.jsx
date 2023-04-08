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
<div className="bg-wAqua-10 min-h-screen flex flex-col justify-center items-center">
  
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-center mb-5 text-wAqua font-semibold">Medicine Availability</h1>
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
  </div>
  <PostalCodeForm />
</div>

  );
};

export default MedSearchPage;
