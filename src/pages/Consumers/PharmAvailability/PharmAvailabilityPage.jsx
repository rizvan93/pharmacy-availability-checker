import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import StoreMap from "../components/StoreMap"
import StoreCard from "../MedAvailability/StoreCard";

export default function PharmAvailability({ setHome }) {
  useEffect(() => {
    setHome(false);
  },[]);

  const { id } = useParams();
  const [stores, setStores] = useState();
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const getStores = async () => {
      const response = await fetch("/api/stores");
      const data = await response.json();
      if (!data.error) {
        setStores(
          data.map((s) => {
            const store = {
              ...s,
              stocks: s?.stocks[0],
            };
            return store;
          })
        );
      }
    };
    getStores();

   
      const getPharmacists= async () => {
        const response = await fetch(`/api/pharmacists/${id}`);
        const data = await response.json();
        setDisplay(data.name);
      };
      getPharmacists();
    }, [id]);


  return (
    <>
   
      {display ? <h1>{display}</h1> : null}
      <StoreMap stores={stores} />
      {stores?.map((s) => (
        <StoreCard store={s} key={s._id} pharmacistName={s.pharmacists} />
      ))}
    </>
  )
}