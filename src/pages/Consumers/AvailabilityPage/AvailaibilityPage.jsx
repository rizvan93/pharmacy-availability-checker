import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import StoreMap from "../components/StoreMap";
import StoreCard from "./StoreCard";
import { toTitleCase } from "../../../utilities/utilities";
import BookmarkButton from "../MedSearch/components/BookmarkButton";

const AvailabilityPage = ({ setHome, setPage, userId }) => {
  const { field, id } = useParams();
  const fetchedStoresCount = useRef(0);
  const [stores, setStores] = useState();
  const [display, setDisplay] = useState("Pharmacists");
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    setHome(false);
    if (field === "pharmacists") {
      setPage("pharmacists");
    }

    navigator.geolocation.getCurrentPosition(
      geoSuccess(setCurrentPosition),
      geoError,
      geoOptions
    );

    const getStores = async () => {
      try {
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
      } finally {
        fetchedStoresCount.current += 1;
      }
    };
    getStores();

    if (field === "medicines") {
      const getMedicine = async () => {
        const response = await fetch(`/api/medicines/${id}`);
        const data = await response.json();
        setDisplay(toTitleCase(data.name));
      };
      getMedicine();
    } else {
      setDisplay("Pharmacists");
    }
  }, [field, id]);

  useEffect(() => {
    if (currentPosition && stores) {
      const sortedStores = [...stores].sort((a, b) =>
        compareDistances(a, b, currentPosition)
      );
      setStores(sortedStores);
    }
  }, [currentPosition, fetchedStoresCount.current]);

  return (
    <>
      <div className="flex flex-row bg-wAqua-5">
        <h1 className="ml-3 flex-1 self-center font-semibold text-wAqua">
          {display}
        </h1>{" "}
        {display === "Pharmacists" ? null : (
          <BookmarkButton id={userId} field="medicines" fieldId={id} />
        )}
      </div>
      <StoreMap stores={stores} currentPosition={currentPosition} />
      {/* insert circle marker for current position */}
      {stores?.map((s) => (
        <StoreCard store={s} key={s._id} field={field} />
      ))}
    </>
  );
};

const geoOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const geoSuccess = (setCurrentPosition) => (pos) => {
  const crd = pos.coords;
  setCurrentPosition(crd);
};

const geoError = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

const compareDistances = (a, b, currentPosition) => {
  const aLatDiff = a.lat - currentPosition.latitude;
  const aLonDiff = a.lon - currentPosition.longitude;
  const aDist = (aLatDiff ** 2 + aLonDiff ** 2) ** 0.5;
  const bLatDiff = b.lat - currentPosition.latitude;
  const bLonDiff = b.lon - currentPosition.longitude;
  const bDist = (bLatDiff ** 2 + bLonDiff ** 2) ** 0.5;

  return aDist - bDist;
};

export default AvailabilityPage;
