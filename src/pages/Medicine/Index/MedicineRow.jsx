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
    <tr>
      <td>{medicine.name}</td>
      <td>
        <Link to={`/medicines/${medicine._id}/edit`}>
          <button>✏️</button>
        </Link>
        <button onClick={onDelete}>🗙</button>
      </td>
    </tr>
  );
};

export default MedicineRow;
