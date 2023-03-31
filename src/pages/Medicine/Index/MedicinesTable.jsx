import MedicineRow from "./MedicineRow";

const MedicinesTable = ({ medicine, removeMedicine }) => {
  return (
    <table>
      <tbody>
        {medicine?.map((medicine) => (
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