import { useEffect, useState } from "react";
import { useParams } from "react-router";
import StoreMap from "../components/StoreMap";
import StoreCard from "./StoreCard";
import { toTitleCase } from "../../../utilities/utilities";
import BookmarkButton from "../MedSearch/components/BookmarkButton";

const AvailabilityPage = ({ setHome, setPage, userId }) => {
  const { field, id } = useParams();
  const [stores, setStores] = useState();
  const [display, setDisplay] = useState("Pharmacists");
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    setHome(false);
    if (field === "pharmacists") {
      setPage("pharmacists");
    }

    const geoOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function geoSuccess(pos) {
      const crd = pos.coords;
      setCurrentPosition(crd);
    }

    function geoError(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
  }, [field, id]);

  useEffect(() => {
    const getStores = async () => {
      const response = await fetch(
        `/api/stores/availability/?field=${field}&fieldId=${id}`
      );
      const data = await response.json();
      if (!data.error) {
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
      {display ? (
        <>
          <h1>{display}</h1>{" "}
          <BookmarkButton id={userId} field="medicines" fieldId={id} />
        </>
      ) : null}
      <StoreMap stores={stores} currentPosition={currentPosition} />
      {stores?.map((s) => (
        <StoreCard store={s} key={s._id} field={field} />
      ))}
    </>
  );
};

export default AvailabilityPage;
