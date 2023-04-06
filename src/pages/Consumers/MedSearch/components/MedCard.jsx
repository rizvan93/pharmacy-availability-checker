const MedCard = ({ medicine, toTitleCase }) => {
  return (
    <>
      <hr />
      <h4>{toTitleCase(medicine.name)}</h4>
      <p>{toTitleCase(medicine.manufacturer)}</p>
      <p>{toTitleCase(medicine.quantity)}</p>
    </>
  );
};

export default MedCard;
