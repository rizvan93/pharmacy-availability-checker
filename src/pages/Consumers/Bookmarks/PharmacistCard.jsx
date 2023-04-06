import { useEffect, useState } from "react";
import BookmarkButton from "../MedSearch/components/BookmarkButton";

export default function PharmacistCard({ pharmacist }) {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const getStores = async () => {
      const response = await fetch("/api/stores");
      const data = await response.json();
      console.log("stores: ", data);
      setStores(data);
    };
    getStores();
  }, []);

  const isAvailable = stores.some((store) =>
    store.pharmacists.includes(pharmacist._id)
  );

  return (
    <>
      <div>
        <div className="pharmacist-info">
          <div className="pharmacist-name font-bold">{pharmacist.name}</div>
          <div className="pharmacist-availability">
            {isAvailable
              ? `Currently available at ${
                  stores.find((store) =>
                    store.pharmacists.includes(pharmacist._id)
                  ).name
                } outlet.`
              : "Not available"}
          </div>
          <BookmarkButton />
        </div>
      </div>
    </>
  );
}
