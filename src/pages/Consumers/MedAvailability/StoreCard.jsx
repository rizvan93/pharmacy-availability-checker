const StoreCard = ({ store }) => {
  return (
    <>
      <hr />
      <h1>{store.name}</h1>
      <p>{store.streetAddress}</p>
      <p>{store?.unitNumber}</p>
      <p>{store.postalCode}</p>
      <p>Medicine Available</p>
      {store.pharmacists.length > 0 ? (
        <ul>
          Pharmacists Available:
          {store?.pharmacists.map((p) => (
            <li>{p.name}</li>
          ))}
        </ul>
      ) : (
        <p>Pharmacist Not Available</p>
      )}
    </>
  );
};

export default StoreCard;
