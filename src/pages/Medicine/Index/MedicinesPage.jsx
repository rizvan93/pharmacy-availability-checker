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
      <div className="mt-12 w-screen py-6">
        <h1 className="font-sans text-3xl font-bold text-wPurple underline">
          Medicines
        </h1>
        <Link to="/medicines/new">
          <button className="inline-block rounded-full bg-wAqua px-4 py-2 text-white hover:bg-wAqua-50">
            Add New Medicine Here
          </button>
        </Link>
        <MedicinesTable medicines={medicines} removeMedicine={removeMedicine} />
      </div>
    </>
  );
};

export default MedicinesPage;
