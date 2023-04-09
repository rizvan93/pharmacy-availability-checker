import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const accountTypes = ["Pharmacist", "Admin"];

const UserCreateForm = () => {
  const [user, setUser] = useState({
    name: "",
    userId: "",
    password: "",
    accountType: "",
    defaultStore: "",
  });
  const [stores, setStores] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit called");

    const createUser = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: ["bearer", token],
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
    console.log("updated user: ", user);
  };

  useEffect(() => {
    const fetchStores = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/stores", {
        headers: {
          Authorization: ["bearer", token],
        },
      });
      const data = await response.json();
      setStores(data);
    };

    if (user.accountType === "Pharmacist") {
      fetchStores();
    }
  }, [user.accountType]);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="px-10 py-6">
        <label className="font-semibold">
          {" "}
          Name: <br />
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            className="mb-4 bg-gray-200 p-2"
          />
        </label>
        <br />

        <label className="font-semibold">
          {" "}
          User ID: <br />
          <input
            name="userId"
            value={user.userId}
            onChange={handleChange}
            required
            className="mb-4 bg-gray-200 p-2"
          />
        </label>
        <br />

        <label className="font-semibold">
          {" "}
          Password: <br />
          <input
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            className="mb-4 bg-gray-200 p-2"
          />
        </label>
        <br />

        <label className="font-semibold">
          {" "}
          Account Type:
          <br />
          <select
            name="accountType"
            value={user.accountType}
            onChange={handleChange}
            className="mb-4 bg-gray-200 p-2"
          >
            <option value="">Select an Option</option>
            {accountTypes.map((type, index) => (
              <option value={type} key={index}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <br />
        {/* store dropdown list */}

        {user.accountType === "Pharmacist" && (
          <label>
            {" "}
            Store:
            <br />
            <select
              name="defaultStore"
              value={user.defaultStore.name}
              onChange={handleChange}
              className="mb-4 bg-gray-200 p-2"
            >
              <option value="">Select an Option</option>
              {stores.map((defaultStore) => (
                <option value={defaultStore._id} key={defaultStore._id}>
                  {defaultStore.name}
                </option>
              ))}
            </select>
          </label>
        )}

        <br />
        <button className="rounded-xl bg-wAqua px-4 py-2 text-white hover:bg-wAqua-50">
          Add New User
        </button>
      </fieldset>
    </form>
  );
};

export default UserCreateForm;
