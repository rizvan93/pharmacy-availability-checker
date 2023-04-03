import { useState } from "react";
import { useNavigate } from "react-router-dom";

const accountTypes = ["Pharmacist", "Admin"];

const UserCreateForm = () => {
  const [user, setUser] = useState({
    name: "",
    userId: "",
    password: "",
    accountType: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit called");

    const createUser = async () => {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        navigate("/users");
      } else {
        console.log("unable to create");
      }
    };

    createUser();
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="px-10 py-6">
        <label> Name:{" "}
        <br />
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            className="mb-4 bg-gray-200 p-2"
          />
        </label>
        <br />

        <label> User ID:{" "}
        <br />
          <input
            name="userId"
            value={user.userId}
            onChange={handleChange}
            required
            className="mb-4 bg-gray-200 p-2"
          />
        </label>
        <br />

        <label> Password:{" "}
        <br />
          <input
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            className="mb-4 bg-gray-200 p-2"
          />
        </label>
        <br />

        <label> Account Type:
        <br />
        <select name="accountType" value={user.accountType} onChange={handleChange} className="mb-4 bg-gray-200 p-2">
          <option value="">Select an Option</option> 
          {accountTypes.map((type, index) => (
            <option value={type} key={index}>
            {type}
            </option>
          ))}
        </select>
      </label>
      <br />
      <br />
        <button className="bg-wAqua hover:bg-wAqua-50 text-white py-2 px-4">Add New User</button>
      </fieldset>
    </form>
  );
};

export default UserCreateForm;