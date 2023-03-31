const MedicineStockForm = ({ medicine, store, setStore }) => {
  const stock = store?.stocks.find((s) => s.medicine === medicine._id);
  const quantity = stock?.quantity || 0;
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
        defaultValue={quantity}
        onChange={handleChange}
      />
    </label>
  );
};

export default MedicineStockForm;
