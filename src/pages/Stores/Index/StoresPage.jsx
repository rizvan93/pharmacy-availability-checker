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
      <div className=" mt-14 flex flex-row justify-between px-4 py-6">
        <div className="w-20"></div>
        <h1 className="font-sans text-3xl font-bold text-wPurple underline">
          Stores
        </h1>
        <Link to="/stores/new">
          <button className="inline-block rounded-full bg-wAqua px-4 py-2 text-white hover:bg-wAqua-50">
            Add New Store
          </button>
        </Link>
      </div>
      <StoresTable stores={stores} removeFromStores={removeFromStores} />
    </>
  );
};

export default StoresPage;
