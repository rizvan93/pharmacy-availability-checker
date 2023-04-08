import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BookmarkButton from "../MedSearch/components/BookmarkButton";

const PharmacistInfoPage = ({ setHome, userId }) => {
  const { id } = useParams();
  const [pharmacist, setPharmacist] = useState(null);
  useEffect(() => {
    setHome(false);

    const getPharmacistAndStore = async () => {
      const getPharmacist = async () => {
        const response = await fetch(`/api/pharmacists/${id}`);
        return await response.json();
      };
      const getStoresData = async () => {
        const response = await fetch(
          "/api/stores/availability/?field=pharmacists&fieldId=null"
        );
        return await response.json();
      };

      const [pharmacist, storesWithPharmacists] = await Promise.all([
        getPharmacist(),
        getStoresData(),
      ]);
      pharmacist.store = storesWithPharmacists.find((s) =>
        s.pharmacists.find((p) => p._id === id)
      );
      setPharmacist(pharmacist);
    };

    getPharmacistAndStore();
  }, [id]);

  return (
    <>
      <h1>{pharmacist?.name}</h1>
      <p>Pharmacist's Bio</p>
      <p>Currently at: {pharmacist?.store.name}</p>
      <BookmarkButton id={userId} field="pharmacists" fieldId={id} />
    </>
  );
};

export default PharmacistInfoPage;
