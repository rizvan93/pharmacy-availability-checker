import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditStorePage = () => {
  const { id } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    const getStore = async () => {
      const response = await fetch(`/api/stores/${id}`);
      const data = await response.json();
      setStore(data);
    };
    getStore();
    // geMedicines()
  }, []);

  return (
    <>
      <h1>Edit Store</h1>
    </>
  );
};

export default EditStorePage;
