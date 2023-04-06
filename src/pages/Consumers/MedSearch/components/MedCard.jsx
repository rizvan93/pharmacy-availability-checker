import BookmarkButton from "./BookmarkButton";

const MedCard = ({ medicine, toTitleCase, id }) => {
  return (
    <>
      <hr />
      <h4>{toTitleCase(medicine.name)}</h4>
      <p>{toTitleCase(medicine.manufacturer)}</p>
      <p>{toTitleCase(medicine.quantity)}</p>
      <BookmarkButton id={id} field="medicines" fieldId={medicine._id} />
    </>
  );
};

export default MedCard;
