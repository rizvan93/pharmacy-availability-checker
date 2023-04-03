import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UserEditForm() {

  const { id } = useParams();
  const [users, setUsers] = useState({ name: '', accountType: '' });
  const navigate = useNavigate ();

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
      navigate("/users");
    } catch (error) {
      console.error(error);
    }
  };

return (
  <>
    <fieldset className="px-10 py-6">
      <label> Name:{" "}
      <br />
        <input 
          name="name" 
          value={users.name} 
          onChange={handleChange} 
          className="mb-4 bg-gray-200 p-2"/>
      </label>
      <br />
      <label> Email:{" "}
      <br />
        <input 
          name="email" 
          value={users.email} 
          onChange={handleChange}
          className="mb-4 bg-gray-200 p-2"/>
      </label>
      <br />
      <label> Account Type:{" "}
      <br />
        <input
          name="accountType"
          value={users.accountType}
          onChange={handleChange}
          className="mb-4 bg-gray-200 p-2"/>
      </label>
      <br />
      <button onClick={handleUpdate} className="bg-wAqua hover:bg-wAqua-50 text-white py-2 px-4">Update</button>
    </fieldset>
  </>
);
}