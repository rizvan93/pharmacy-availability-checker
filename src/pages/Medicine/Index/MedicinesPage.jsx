import MedicinesTable from "./MedicinesTable";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MedicinesPage = () => {
  const [medicines, setMedicines] = useState(null);

  useEffect(() => {
    const getMedicines = async () => {
      const response = await fetch("/api/medicines");
      const data = await response.json();
      setMedicines(data);
    };
    getMedicines();
  }, []);

  const removeMedicine = (id) => {
    setMedicines(medicines.filter((medicine) => medicine._id !== id));
  };

  return (
    <>
      <div className="mt-12 flex w-screen flex-col items-center justify-center py-6">
        <div></div>
        <h1 className="mb-2 font-sans text-3xl font-bold text-wPurple underline">
          Medicines
        </h1>
        <Link to="/medicines/new">
          <button className=" mb-2 inline-block rounded-xl bg-wAqua px-4 py-1.5 text-white hover:bg-wAqua-50">
            Add New Medicine
          </button>
        </Link>

        <MedicinesTable medicines={medicines} removeMedicine={removeMedicine} />
      </div>
    </>
  );
};

export default MedicinesPage;
