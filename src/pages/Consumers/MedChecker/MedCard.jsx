const MedCard = ({ medicine, toTitleCase }) => {
  return (
    <>
      <hr />
      <h4>{toTitleCase(medicine.name)}</h4>
      <p>{toTitleCase(medicine.manufacturer)}</p>
      <p>{toTitleCase(medicine.quantity)}</p>
      <button>Check Availability</button>
    </>
  );
};

export default MedCard;
