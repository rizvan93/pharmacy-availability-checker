import MedicineRow from "./MedicineRow";

const MedicinesTable = ({ medicines, removeMedicine }) => {
  return (
    <table className="min-w-full table-auto border-collapse">
      <thead>
        <tr className="bg-gray-200 text-sm uppercase leading-normal text-black">
          <th className="px-6 py-3 text-left">Name</th>
          {/* <th className="px-6 py-3 text-left">Type</th>
          <th className="px-6 py-3 text-left">Pack Count</th>
          <th className="px-6 py-3 text-left">Dose</th>
          <th className="px-6 py-3 text-left">UOM</th>
          <th className="px-6 py-3 text-left">Edit</th>
          <th className="px-6 py-3 text-left">Delete</th> */}
          <th></th>
        </tr>
      </thead>
      <tbody className="text-sm font-light text-black">
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
