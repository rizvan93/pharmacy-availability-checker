import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BotttomNavBar from "../../../components/ConsumerNavBar/BottomNavBar";
import TopNavBar from "../../../components/ConsumerNavBar/TopNavBar";
import StoreMap from "../components/StoreMap";

const MedAvailabilityPage = () => {
  const { id } = useParams();
  const [stores, setStores] = useState();

  useEffect(() => {
    const getStores = async () => {
      const response = await fetch("/api/stores");
      const data = await response.json();
      setStores(
        data.map((s) => {
          return { name: s.name, lat: s.lat, lon: s.lon, _id: s._id };
        })
      );
    };
    getStores();
  }, [id]);

  return (
    <>
      <TopNavBar backButton={true} />
      <h1>Display Availability in Stores</h1>
      <StoreMap stores={stores} />
      <BotttomNavBar />
    </>
  );
};

export default MedAvailabilityPage;
