const MedicineStockForm = ({ medicine, store, setStore }) => {
  const stock = store?.stocks.find((s) => s.medicine === medicine._id) || 0;
  console.log(`${medicine.name}, qty: ${stock.quantity}`);
  const handleChange = (event) => {
    const newStock = {
      medicine: medicine._id,
      quantity: event.target.value,
    };
    const newStocks = [
      newStock,
      ...store?.stocks.filter((stock) => stock.medicine !== medicine._id),
    ];
    setStore({
      ...store,
      stocks: newStocks,
    });
  };

  return (
    <label>
      {medicine.name} :
      <input
        name="quantity"
        type="number"
        defaultValue={stock.quantity}
        onChange={handleChange}
      />
    </label>
  );
};

export default MedicineStockForm;
