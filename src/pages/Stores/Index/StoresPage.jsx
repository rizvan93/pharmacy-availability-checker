import StoresTable from "./StoresTable";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StoresPage = () => {
  const [stores, setStores] = useState(null);

  useEffect(() => {
    const getStores = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/stores", {
        headers: {
          Authorization: ["bearer", token],
        },
      });
      const data = await response.json();
      setStores(data);
    };
    getStores();
  }, []);

  const removeFromStores = (id) => {
    setStores(stores.filter((store) => store._id !== id));
  };

  return (
    <>
      <h1 className="font-sans text-3xl font-bold text-wPurple underline">
        Stores
      </h1>
      <Link to="/stores/new">
        <button>Add New</button>
      </Link>
      <StoresTable stores={stores} removeFromStores={removeFromStores} />
    </>
  );
};

export default StoresPage;
