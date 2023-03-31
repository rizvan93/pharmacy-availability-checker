import MedicineRow from "./MedicineRow";

const MedicinesTable = ({ medicines, removeMedicine }) => {
  return (
    <table>
      <tbody>
        {medicines?.map((medicine) => (
          <MedicineRow
            medicine={medicine}
            key={medicine._id}
            removeMedicine={removeMedicine}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MedicinesTable;
