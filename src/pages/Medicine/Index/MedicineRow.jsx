import { Link } from "react-router-dom";


const MedicineRow = ({ medicine, removeMedicine }) => {
  const onDelete = async () => {
    try {
      const response = await fetch(`/api/medicines/${medicine._id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        removeMedicine(medicine._id);
      } else {
        console.log("unable to delete");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">{medicine.name}</td>
      <td className="py-3 px-6 text-left whitespace-nowrap">{medicine.type}</td>
      <td className="py-3 px-6 text-left whitespace-nowrap">{medicine.packCount}</td>
      <td className="py-3 px-6 text-left whitespace-nowrap">{medicine.dose}</td>
      <td className="py-3 px-6 text-left whitespace-nowrap">{medicine.uom}</td>
      <td className=" hover:bg-yellow-400 text-white font-bold py-1 px-2 rounded">
        <Link to={`/medicines/${medicine._id}/edit`}>
          <button>✏️</button>
        </Link></td>
      <td className=" hover:bg-red-400 text-black font-bold py-1 px-2 ml-2 rounded">
        <button onClick={onDelete}>🗙</button>
      </td>
    </tr>
  );
};

export default MedicineRow;
