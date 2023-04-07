import { Link } from "react-router-dom";

const StoresTableRow = ({ store, removeFromStores }) => {
  const onDelete = () => {
    const deleteStore = async (id) => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/stores/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: ["bearer", token],
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log("unable to delete");
      }
    };

    deleteStore(store._id);
    removeFromStores(store._id);
  };

  return (
    <tr>
      <td className="border-b border-gray-300 py-3 text-center">
        {store.name}
      </td>
      <td className="border-b border-gray-300 py-3 text-center">
        {store.streetAddress}
      </td>
      <td className="border-b border-gray-300 py-3 text-center">
        {store.unitNumber}
      </td>
      <td className="border-b border-gray-300 py-3 text-center">
        {store.postalCode}
      </td>
      <td className="border-b border-gray-300 py-3 text-center">
        <Link to={`/stores/${store._id}/edit`}>
          <button>✏️</button>
        </Link>
        <button onClick={onDelete}>🗙</button>
      </td>
    </tr>
  );
};

export default StoresTableRow;
