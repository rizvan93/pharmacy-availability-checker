import StoresTable from "./StoresTable";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StoresPage = () => {
  const [stores, setStores] = useState(null);

  useEffect(() => {
    const getStores = async () => {
      const response = await fetch("/api/stores");
      const data = await response.json();
      setStores(data);
    };
    getStores();
  }, []);

  return (
    <>
      <h1>Stores</h1>
      <Link to="/stores/new">
        <button>Add New</button>
      </Link>
      <StoresTable stores={stores} />
    </>
  );
};

export default StoresPage;
