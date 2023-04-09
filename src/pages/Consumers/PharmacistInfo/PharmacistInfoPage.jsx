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
      <div className="rounded-lg bg-wAqua-50 p-2 shadow-md">
        <h1 className="font-bold text-wPurple">{pharmacist?.name}</h1>
        <div className="flex flex-row">
          <p className="flex-1">Currently at: {pharmacist?.store.name}</p>
          <BookmarkButton id={userId} field="pharmacists" fieldId={id} />
        </div>
      </div>
      <div className="p-2">
        <p>Further bio can be included here: </p>
        <ul>
          <li>Picture</li>
          <li>Languagues</li>
          <li>About</li>
        </ul>
      </div>
    </>
  );
};

export default PharmacistInfoPage;
