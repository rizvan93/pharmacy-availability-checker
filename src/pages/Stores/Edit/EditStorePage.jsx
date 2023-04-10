import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditStoreForm from "./EditStoreForm";

const EditStorePage = () => {
  const { id } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    const getStore = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/stores/${id}`, {
        headers: {
          Authorization: ["bearer", token],
        },
      });
      const data = await response.json();
      setStore(data);
    };
    getStore();
  }, [id]);

  return (
    <>
      <EditStoreForm store={store} setStore={setStore} />
    </>
  );
};

export default EditStorePage;
