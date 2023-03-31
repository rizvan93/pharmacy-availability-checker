import StoresTableRow from "./StoresTableRow";

const StoresTable = ({ stores, removeFromStores }) => {
  return (
    <table className="border-separate border border-wPurple-10 table-fixed">
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
