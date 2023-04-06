import { Link } from "react-router-dom";
import BookmarkButton from "./BookmarkButton";
import { toTitleCase } from "../../../../utilities/utilities";

const MedCard = ({ medicine, id }) => {
  return (
    <>
      <hr />
      <Link to={`/consumers/availability/medicines/${medicine._id}`}>
        <h4>{toTitleCase(medicine.name)}</h4>
        <p>{toTitleCase(medicine.manufacturer)}</p>
        <p>{toTitleCase(medicine.quantity)}</p>
      </Link>
      {id ? (
        <BookmarkButton id={id} field="medicines" fieldId={medicine._id} />
      ) : null}
    </>
  );
};

export default MedCard;
