const MedCard = ({ medicine }) => {
  return (
    <>
      <hr />
      <h4>{medicine.name}</h4>
      <p>{medicine.type}</p>
      <p>{medicine.packCount}</p>
      <button>Check Availability</button>
    </>
  );
};

export default MedCard;
