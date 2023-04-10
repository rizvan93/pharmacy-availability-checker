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
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-row justify-between">
          <h1 className="mb-2 flex-1 font-sans text-3xl font-bold text-wPurple underline">
            Stores
          </h1>
          <Link to="/stores/new">
            <button className="inline-block rounded-xl bg-wAqua px-4 py-1.5 text-white hover:bg-wAqua-50">
              Add New Store
            </button>
          </Link>
        </div>
      </div>
      <StoresTable stores={stores} removeFromStores={removeFromStores} />
    </>
  );
};

export default StoresPage;
