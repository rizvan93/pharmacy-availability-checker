import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UserEditForm() {
  const { id } = useParams();
  const [users, setUsers] = useState({ name: "", userId: "", accountType: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/users/${id}`, {
        headers: {
          Authorization: ["bearer", token],
        },
      });
      const user = await response.json();
      setUsers(user)
    };
    fetchUsers();
  }, [id]);

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setUsers({ ...users, [key]: value });
  };

  const handleUpdate = async (event) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: ["bearer", token],
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
        <label>
          {" "}
          Name: <br />
          <input
            name="name"
            value={users.name}
            onChange={handleChange}
            className="mb-4 bg-gray-200 p-2"
          />
        </label>
        <br />
        <label>
          {" "}
          User ID: <br />
          <input
            name="userId"
            value={users.userId}
            onChange={handleChange}
            className="mb-4 bg-gray-200 p-2"
          />
        </label>
        <br />
        <label>
          {" "}
          Account Type: <br />
          <input
            name="accountType"
            value={users.accountType}
            onChange={handleChange}
            className="mb-4 bg-gray-200 p-2"
          />
        </label>
        <br />
        <button
          onClick={handleUpdate}
          className="bg-wAqua px-4 py-2 text-white hover:bg-wAqua-50"
        >
          Update
        </button>
      </fieldset>
    </>
  );
}
