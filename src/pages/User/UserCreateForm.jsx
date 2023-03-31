import { useState } from "react";
import { useNavigate } from "react-router-dom";

const accountTypes = ["Pharmacist", "Consumer", "Inventory Manager", "Admin"];

const UserCreateForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
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
      <fieldset>
        <label>
          Name:{" "}
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:{" "}
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:{" "}
          <input
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </label>

        <label>
        Account Type:
        <select name="accountType" value={user.accountType} onChange={handleChange}>
          <option value="">Select an Option</option> 
          {accountTypes.map((type, index) => (
            <option value={type} key={index}>
            {type}
            </option>
          ))}
        </select>
      </label>

        <button>Add New User</button>
      </fieldset>
    </form>
  );
};

export default UserCreateForm;