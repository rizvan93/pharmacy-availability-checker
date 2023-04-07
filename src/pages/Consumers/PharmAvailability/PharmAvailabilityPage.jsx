import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import StoreMap from "../components/StoreMap";
import StoreCard from "../AvailabilityPage/StoreCard";

export default function PharmAvailability({ setHome }) {
  useEffect(() => {
    setHome(false);
  }, []);

  const { id } = useParams();
  const [stores, setStores] = useState();

  useEffect(() => {
    const getStores = async () => {
      const response = await fetch("/api/stores");
      const data = await response.json();
      if (!data.error) {
        const storesWithPharmacists = data.map((s) => ({
          ...s,
          pharmacists: s?.pharmacists,
        }));
        setStores(storesWithPharmacists);
      }
    };
    getStores();
  }, [id]);

  return (
    <div className="py-20">
      <StoreMap stores={stores} />
      <div className="ml-5">
        {stores?.map((s) => (
          <StoreCard store={s} key={s._id} pharmacistName={s.pharmacists} />
        ))}
      </div>
    </div>
  );
}
