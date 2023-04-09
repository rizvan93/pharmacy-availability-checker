import { Link } from "react-router-dom";

const MedicineRow = ({ medicine, removeMedicine }) => {
  const onDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/medicines/${medicine._id}`, {
        method: "DELETE",
        headers: {
          Authorization: ["bearer", token],
        },
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
      <td className=" px-2 py-3 text-left">{medicine.name}</td>
      {/* <td className="whitespace-nowrap px-6 py-3 text-left">{medicine.type}</td>
      <td className="whitespace-nowrap px-6 py-3 text-left">
        {medicine.packCount}
      </td>
      <td className="whitespace-nowrap px-6 py-3 text-left">{medicine.dose}</td>
      <td className="whitespace-nowrap px-6 py-3 text-left">{medicine.uom}</td> */}
      <td className=" border-b border-gray-300 py-3 text-center">
        <Link to={`/medicines/${medicine._id}/edit`}>
          <button>✏️</button>
        </Link>
        <button onClick={onDelete}>🗙</button>
      </td>
      {/* <td className=" ml-2 rounded px-2 py-1 font-bold text-black hover:bg-red-400">
        <button onClick={onDelete}>🗙</button>
      </td> */}
    </tr>
  );
};

export default MedicineRow;
