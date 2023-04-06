import { Link } from "react-router-dom";
import BookmarkButton from "./BookmarkButton";

const MedCard = ({ medicine, toTitleCase, id }) => {
  return (
    <Link to={`/consumers/availability/medicines/${medicine._id}`}>
      <>
        <hr />
        <h4>{toTitleCase(medicine.name)}</h4>
        <p>{toTitleCase(medicine.manufacturer)}</p>
        <p>{toTitleCase(medicine.quantity)}</p>
        {id ? (
          <BookmarkButton id={id} field="medicines" fieldId={medicine._id} />
        ) : null}
      </>
    </Link>
  );
};

export default MedCard;
