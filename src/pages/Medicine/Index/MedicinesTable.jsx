import MedicineRow from "./MedicineRow";

const MedicinesTable = ({ medicines, removeMedicine }) => {
  return (
<table className="min-w-full table-auto border-collapse">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-left">Name</th>
          <th className="py-3 px-6 text-left">Type</th>
          <th className="py-3 px-6 text-left">Pack Count</th>
          <th className="py-3 px-6 text-left">Dose</th>
          <th className="py-3 px-6 text-left">UOM</th>
          <th className="py-3 px-6 text-left">Edit</th>
          <th className="py-3 px-6 text-left">Delete</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
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
