import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserTypeFilter from "./UserTypeFilter";
import UserDeleteButton from "./UserDeleteButton";

export default function UserPage () {
const [users, setUsers] = useState([]);
const [filteredUsers, setFilteredUsers] = useState([]);

useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data);
    }
    fetchUsers();
  }, []);

  const handleFilter = (filter) => {
    if (filter === "") {
      setFilteredUsers(users);
    } else {
    const filteredUsers = users.filter((user) => user.accountType === filter);
    setFilteredUsers(filteredUsers)
    }
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter(({_id}) => _id !== id);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
};

    return (
        <>
        <Link to="/users/new">
            <button>Add New User</button>
        </Link>

        <UserTypeFilter handleFilter={handleFilter} />

        <h1>User</h1>
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Role</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {filteredUsers.map((user) => (
            <tr key={user._id}>
            <td>
            <Link to={`/users/${user._id}`}>{user.name}</Link>
            </td>
            <td>{user.accountType}</td>
            <td><UserDeleteButton id={user._id} delUser={handleDelete} /></td>
            </tr>
        ))}
        </tbody>
        </table>
       
        </>
    );
};