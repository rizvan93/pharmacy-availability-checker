import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UserEditForm() {

  const { id } = useParams();
  const [users, setUsers] = useState({ name: '', accountType: '' });

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch (`/api/users/${id}`);
      const user = await response.json();
      setUsers(user);
    }
    fetchUsers()
  }, [id])

  const handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    setUsers({...users, [key]: value})
  }

  const handleUpdate = async (event) => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      });
      const updatedUser = await response.json();
      setUsers(updatedUser);
    } catch (error) {
      console.error(error);
    }
  };

return (
  <>
    <fieldset>
      <legend>User Information</legend>
      <label>
        Name:{" "}
        <input 
          name="name" 
          value={users.name} 
          onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:{" "}
        <input 
          name="email" 
          value={users.email} 
          onChange={handleChange} />
      </label>
      <br />
      <label>
        Account Type:{" "}
        <input
          name="accountType"
          value={users.accountType}
          onChange={handleChange}
        />
      </label>
      <br />
      <button onClick={handleUpdate}>Update</button>
    </fieldset>
  </>
);
}