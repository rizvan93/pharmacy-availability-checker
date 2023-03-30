import StoresTableRow from "./StoresTableRow";

const StoresTable = ({ stores }) => {
  return (
    <table>
      <tbody>
        {stores?.map((store) => (
          <StoresTableRow store={store} key={store._id} />
        ))}
      </tbody>
    </table>
  );
};

export default StoresTable;
