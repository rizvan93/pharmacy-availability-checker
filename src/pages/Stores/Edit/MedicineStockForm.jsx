const MedicineStockForm = ({ medicine, store, setStore }) => {
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
    <div className="flex w-full flex-row">
      <label className="flex-1 font-semibold">{medicine.name} :</label>
      <input
        className="mb-2 max-w-sm bg-gray-200"
        name="quantity"
        type="number"
        value={
          store?.stocks?.find((s) => s.medicine === medicine._id)?.quantity || 0
        }
        onChange={handleChange}
      />
      <br />
    </div>
  );
};

export default MedicineStockForm;
