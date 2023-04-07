import BookmarkButton from "../MedSearch/components/BookmarkButton";

export default function MedicineCard({ medicine, id, removeMedicine }) {
  return (
    <>
      <div className="">
        {/* <p>Name: {medicine.name}</p> */}
        <p>
          <span className="font-semibold">Form: </span> {medicine.form}
        </p>
        <p>
          <span className="font-semibold">Quantity: </span>
          {medicine.quantity}
        </p>
        <p>
          <span className="font-semibold">strength: </span>
          {medicine.strength}
        </p>
      </div>
      {/* <button onClick={removeMedicine(medicine._id)}> */}
      <BookmarkButton
        id={id}
        field="medicines"
        fieldId={medicine._id}
        removeItem={removeMedicine(medicine._id)}
      />
      {/* </button> */}
    </>
  );
}
