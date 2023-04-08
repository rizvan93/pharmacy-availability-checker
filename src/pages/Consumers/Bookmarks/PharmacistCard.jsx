import { useEffect, useState } from "react";
import BookmarkButton from "../MedSearch/components/BookmarkButton";

export default function PharmacistCard({ pharmacist, id, removePharmacist }) {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token: ", token);
    const getStores = async () => {
      const response = await fetch("/api/stores", {
        headers: {
          Authorization: ["bearer", token],
        },
      });
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
      <div className="pharmacist-info mt-2">
        <div className=" flex">
          <h3 className="pharmacist-name w-10/12 font-bold">
            {pharmacist.name}
          </h3>
          <BookmarkButton
            id={id}
            field="pharmacists"
            fieldId={pharmacist._id}
            removeItem={removePharmacist(pharmacist._id)}
          />
        </div>

        <div className="pharmacist-availability mt-2">
          {isAvailable
            ? `Currently available at ${
                stores.find((store) =>
                  store.pharmacists.includes(pharmacist._id)
                ).name
              } outlet.`
            : "Not available"}
        </div>
        {/* <button onClick={removePharmacist(pharmacist._id)}> */}
        {/* <BookmarkButton
            id={id}
            field="pharmacists"
            fieldId={pharmacist._id}
            removeItem={removePharmacist(pharmacist._id)}
          /> */}
        {/* </button> */}
      </div>
    </>
  );
}
