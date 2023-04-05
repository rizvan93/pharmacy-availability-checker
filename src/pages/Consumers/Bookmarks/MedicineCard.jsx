export default function MedicineCard({ medicine }) {
  return (
    <>
      <div className="">
        {/* <p>Name: {medicine.name}</p> */}
        <p>Form: {medicine.form}</p>
        <p>Quantity: {medicine.quantity}</p>
        <p>strength: {medicine.strength}</p>
      </div>
    </>
  );
}
