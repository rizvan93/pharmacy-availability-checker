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
<div className="bg-wAqua-10 rounded-lg shadow-md border-gray-300 px-4 py-3 sm:p-8">
  <h1 className="text-2xl font-bold mb-4">Medicine availability</h1>
  <div className="mb-4">
    <MedNameForm setMedicines={setMedicines} />
  </div>

  <div className="mb-4">
    <MedSelectForm
      medicines={medicines}
      field="form"
      setMedicines={setMedicinesFilteredForm}
      toTitleCase={toTitleCase}
    />
  </div>

  <div className="mb-4">
    <MedSelectForm
      medicines={medicinesFilteredForm}
      field="quantity"
      setMedicines={setMedicinesFilteredQuantity}
      toTitleCase={toTitleCase}
    />
  </div>

  {medicinesFilteredQuantity?.map((m) => (
    <MedCard
      medicine={m}
      toTitleCase={toTitleCase}
      key={m._id}
      id={user.accountId}
    />
  ))}
  <hr />

  <div className="mb-4">
    <PostalCodeForm />
  </div>
</div>
  );
};

export default MedSearchPage;
