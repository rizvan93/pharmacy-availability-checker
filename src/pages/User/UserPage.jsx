import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserTypeFilter from "./UserTypeFilter";
import UserDeleteButton from "./UserDeleteButton";

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/users", {
        headers: {
          Authorization: ["bearer", token],
        },
      });
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data);
    }
    getUsers();
  }, []);

  const handleFilter = (filter) => {
    if (filter === "") {
      setFilteredUsers(users);
    } else {
      const filteredUsers = users.filter((user) => user.accountType === filter);
      setFilteredUsers(filteredUsers);
    }
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter(({ _id }) => _id !== id);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <UserTypeFilter handleFilter={handleFilter} />
        <h1 className="font-sans text-3xl font-bold  text-wPurple underline">
          Users
        </h1>

        <Link to="/users/new">
          <button className="mr-1 inline-block rounded-xl bg-wAqua px-4 py-1.5 text-white hover:bg-wAqua-50">
            Add New User
          </button>
        </Link>
      </div>

      <br />
      <table className="w-full">
        <thead className=" bg-[#e2e8f0] text-black">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Role</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td className="border-b border-gray-300 py-3">
                <Link
                  to={`/users/${user._id}`}
                  className="text-wAqua hover:text-wAqua-50"
                >
                  {user.name}
                </Link>
              </td>
              <td className="border-b border-gray-300 py-3">
                {user.accountType}
              </td>
              <td className="border-b border-gray-300 py-3">
                <UserDeleteButton id={user._id} delUser={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
