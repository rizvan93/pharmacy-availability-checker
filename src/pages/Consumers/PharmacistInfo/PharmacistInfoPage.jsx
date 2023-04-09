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
    <div className="mt-10">
    <div className="pt-12 flex h-full items-center justify-center flex-col">
    <div className="bg-wAqua-50 rounded-lg shadow-lg p-5">
      <p className="font-bold">{pharmacist?.name}</p>
      <p>Currently at: {pharmacist?.store.name} 
      <BookmarkButton id={userId} field="pharmacists" fieldId={id} /></p>
      </div>
      </div>
      </div>
    
    </>
  );
};

export default PharmacistInfoPage;
