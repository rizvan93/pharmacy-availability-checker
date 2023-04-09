import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookmarkButton from "../MedSearch/components/BookmarkButton";

export default function PharmacistCard({ pharmacist, id, removePharmacist }) {
  const [stores, setStores] = useState([]);
  const [availableAt, setAvailableAt] = useState(null);

  useEffect(() => {
    const getStores = async () => {
      const response = await fetch(
        "/api/stores/availability/?field=pharmacists&fieldId=null"
      );
      const data = await response.json();
      setStores(data);
    };
    getStores();
  }, []);

  useEffect(() => {
    setAvailableAt(
      stores.find((store) =>
        store.pharmacists.find((p) => p._id === pharmacist._id)
      )
    );
  }, [stores]);

  return (
    <>
      <div className="pharmacist-info mt-2">
        <div className=" flex">
          <Link
            className="flex-1"
            to="/consumers/availability/pharmacists/null"
          >
            <h3 className="pharmacist-name w-10/12 font-bold">
              {pharmacist.name}
            </h3>
          </Link>
          <BookmarkButton
            id={id}
            field="pharmacists"
            fieldId={pharmacist._id}
            removeItem={removePharmacist(pharmacist._id)}
          />
        </div>

        <div className="pharmacist-availability mt-2">
          {availableAt
            ? `Currently available at ${availableAt.name} outlet.`
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
