import { Link } from "react-router-dom";
import { toTitleCase } from "../../../utilities/utilities";
import BookmarkButton from "../MedSearch/components/BookmarkButton";

export default function MedicineCard({ medicine, id, removeMedicine }) {
  return (
    <>
      <div className="mt-2 ">
        <div className=" flex ">
          <Link
            className="w-10/12 flex-1 font-bold text-wPurple"
            to={`/consumers/availability/medicines/${medicine._id}`}
          >
            <h3>{toTitleCase(medicine.name)}</h3>
          </Link>
          <BookmarkButton
            id={id}
            field="medicines"
            fieldId={medicine._id}
            removeItem={removeMedicine(medicine._id)}
          />
        </div>
        {/* <p>Name: {medicine.name}</p> */}
        <Link to={`/consumers/availability/medicines/${medicine._id}`}>
          <p>
            <span className="font-semibold">Form: </span>{" "}
            {toTitleCase(medicine.form)}
          </p>
          <p>
            <span className="font-semibold">Quantity: </span>
            {toTitleCase(medicine.quantity)}
          </p>
          <p>
            <span className="font-semibold">strength: </span>
            {medicine.strength}
          </p>
        </Link>
      </div>
    </>
  );
}
