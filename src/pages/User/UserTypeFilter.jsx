import { useState } from "react";

export default function UserTypeFilter({ handleFilter }) {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
    handleFilter(e.target.value);
  };

  return (
    <div className="border-2 border-wAqua">
    <select value={filter} onChange={handleChange}>
    <option value="">All Roles</option>
    <option value="Pharmacist">Pharmacist</option>
    <option value="Admin">Admin</option>
    <option value="Consumer">Consumer</option>
    </select>
    </div>

  );
}
