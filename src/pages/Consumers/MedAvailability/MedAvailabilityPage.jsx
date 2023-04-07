import { useEffect, useState } from "react";
import { useParams } from "react-router";
import StoreMap from "../components/StoreMap";
import StoreCard from "./StoreCard";
import { toTitleCase } from "../../../utilities/utilities";

const MedAvailabilityPage = ({ setHome }) => {
  useEffect(() => {
    setHome(false);
  }, []);

  const { field, id } = useParams();
  const [stores, setStores] = useState();
  const [display, setDisplay] = useState("Pharmacists");

  useEffect(() => {
    const getStores = async () => {
      const response = await fetch(
        `/api/stores/availability/?field=${field}&fieldId=${id}`
      );
      const data = await response.json();
      if (!data.error) {
        console.log(data);
        setStores(
          data.map((s) => {
            const store = {
              ...s,
            };
            if (s.stocks) {
              store.stocks = s?.stocks[0].quantity;
            }
            return store;
          })
        );
      }
    };
    getStores();

    if (field === "medicines") {
      setDisplay("medicine name");
      const getMedicine = async () => {
        console.log("before fetch");
        const response = await fetch(`/api/medicines/${id}`);
        const data = await response.json();
        setDisplay(toTitleCase(data.name));
      };
      getMedicine();
    }
  }, [field, id]);

  return (
    <>
      {display ? <h1>{display}</h1> : null}
      <StoreMap stores={stores} />
      {stores?.map((s) => (
        <StoreCard store={s} key={s._id} field={field} />
      ))}
    </>
  );
};

export default MedAvailabilityPage;
