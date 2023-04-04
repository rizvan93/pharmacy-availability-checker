import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditStoreForm from "./EditStoreForm";

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
  }, [id]);

  return (
    <>
      <h1>Edit Store</h1>
      <EditStoreForm store={store} setStore={setStore} />
    </>
  );
};

export default EditStorePage;
