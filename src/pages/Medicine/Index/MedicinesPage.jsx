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
      <br />
      <h1 className="text-3xl font-bold underline font-sans text-wPurple">Medicines</h1>
      <Link to="/medicines/new">
        <button className="inline-block bg-wAqua hover:bg-wAqua-50 text-white py-2 px-4 rounded-full">Add New Medicine Here</button>
      </Link>
      <MedicinesTable medicines={medicines} removeMedicine={removeMedicine} />
    </>
  );
};

export default MedicinesPage;

