import StoresTableRow from "./StoresTableRow";

const StoresTable = ({ stores, removeFromStores }) => {
  return (
    <table className="w-full">
      <thead className="bg-[#e2e8f0] text-black">
        <tr>
          <th className="px-4 py-3">Name</th>
          <th className="px-4 py-3">Street Address</th>
          <th className="px-4 py-3">Unit Number</th>
          <th className="px-4 py-3">Postal Code</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {stores?.map((store) => (
          <StoresTableRow
            store={store}
            key={store._id}
            removeFromStores={removeFromStores}
          />
        ))}
      </tbody>
    </table>
  );
};

export default StoresTable;
