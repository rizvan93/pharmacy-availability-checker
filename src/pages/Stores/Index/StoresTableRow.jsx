const StoresTableRow = ({ store }) => {
  return (
    <tr>
      <td>{store.name}</td>
      <td>
        <button>✏️</button>
        <button>🗙</button>
      </td>
    </tr>
  );
};

export default StoresTableRow;
