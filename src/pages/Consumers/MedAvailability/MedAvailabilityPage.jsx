import { useEffect, useState } from "react";
import { useParams } from "react-router";
import StoreMap from "../components/StoreMap";

const MedAvailabilityPage = ({ setHome }) => {
  useEffect(() => {
    setHome(false);
  }, []);

  const { field, id } = useParams();
  const [stores, setStores] = useState();

  useEffect(() => {
    const getStores = async () => {
      const response = await fetch(
        `/api/stores/availability/?field=${field}&fieldId=${id}`
      );
      const data = await response.json();
      if (!data.error) {
        setStores(
          data.map((s) => {
            const store = { name: s.name, lat: s.lat, lon: s.lon, _id: s._id };
            if (field === "medicines") {
              store.stock = s.stocks[0].quantity;
              store.pharmacists = s.pharmacists.length;
            }
            return store;
          })
        );
      }
    };
    getStores();
  }, [id]);

  console.log(stores);

  return (
    <>
      <h1>Display Availability in Stores</h1>
      <StoreMap stores={stores} />
    </>
  );
};

export default MedAvailabilityPage;
