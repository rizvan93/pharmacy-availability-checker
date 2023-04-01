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

  const removeMedicines = (id) => {
  setMedicines(medicines.filter((medicine) => medicine._id !== id));
  };

  return (
    <>
      <h1>Medicines</h1>
      <Link to="/medicines/new">
        <button>Add New Medicine</button>
      </Link>
      <MedicinesTable medicines={medicines} removeMedicines={removeMedicines} />
    </>
  );
};

export default MedicinesPage;
