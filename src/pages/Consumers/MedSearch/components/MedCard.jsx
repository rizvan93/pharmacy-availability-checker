import { useEffect } from "react";
import BookmarkButton from "./BookmarkButton";

const MedCard = ({ medicine, toTitleCase, user }) => {
  return (
    <>
      <hr />
      <h4>{toTitleCase(medicine.name)}</h4>
      <p>{toTitleCase(medicine.manufacturer)}</p>
      <p>{toTitleCase(medicine.quantity)}</p>
      {user ? (
        <BookmarkButton
          id={user.accountId}
          fieldId={medicine._id}
          field="medicines"
        />
      ) : null}
    </>
  );
};

export default MedCard;
