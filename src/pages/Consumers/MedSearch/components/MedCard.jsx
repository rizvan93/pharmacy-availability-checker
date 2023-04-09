import { Link } from "react-router-dom";
import BookmarkButton from "./BookmarkButton";
import { toTitleCase } from "../../../../utilities/utilities";

const MedCard = ({ medicine, id }) => {
  return (
    <div className="flex items-center border-b border-gray-300 py-4">
      <div className="flex-1">
        <Link
          to={`/consumers/availability/medicines/${medicine._id}`}
          className="text-wAqua hover:underline"
        >
          <h4 className="text-lg font-semibold">
            {toTitleCase(medicine.name)}
          </h4>
          <p className="text-sm">{toTitleCase(medicine.manufacturer)}</p>
          <p className="text-sm">{toTitleCase(medicine.quantity)}</p>
        </Link>
      </div>
      <div className="flex-shrink-0">
        {id ? (
          <BookmarkButton id={id} field="medicines" fieldId={medicine._id} />
        ) : null}
      </div>
    </div>
  );
};

export default MedCard;
