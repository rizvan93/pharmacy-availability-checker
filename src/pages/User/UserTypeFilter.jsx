import { useState } from "react";

export default function UserTypeFilter({ handleFilter }) {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
    handleFilter(e.target.value);
  };

  return (
    <div>
    <label>Account Type:</label>
    <select value={filter} onChange={handleChange}>
    <option value="">All Roles</option>
    <option value="Pharmacist">Pharmacist</option>
    <option value="Pharmacist">Consumer</option>
    <option value="InventoryManager">Inventory Manager</option>
    <option value="Admin">Admin</option>
    </select>
    </div>

  );
}
