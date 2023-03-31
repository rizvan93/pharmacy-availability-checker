import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditMedicinesPage = () => {
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);

  useEffect(() => {
    const getMedicine = async () => {
      const response = await fetch(`/api/medicine/${id}`);
      const data = await response.json();
      setMedicine(data);
    };
    getMedicine();
  }, []);

  return (
    <>
      <h1>Update Medicine</h1>
    </>
  );
};

export default EditMedicinesPage;