import { Link } from "react-router-dom";

const MedicineRow = ({ medicine, removeMedicine }) => {
  const onDelete = () => {
    const deleteMedicine = async (id) => {
      const response = await fetch(`/api/medicines/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log("unable to delete");
      }
    };

    deleteMedicine(medicine._id);
    removeMedicine(medicine._id);
  };

  return (
    <tr>
      <td>{medicine.name}</td>
      <td>
        <Link to={`/medicine/${medicine._id}/edit`}>
          <button>✏️</button>
        </Link>
        <button onClick={onDelete}>🗙</button>
      </td>
    </tr>
  );
};

export default MedicineRow;