import { useState } from "react";

const accountTypes = ["Pharmacist", "Consumer", "Inventory Manager", "Admin"];

const SignUpForm = () => {
  const blankData = {
    userId: "",
    password: "",
    confirm: "",
    accountType: "",
  };
  const [data, setData] = useState(blankData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //fire off a post request

    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    //confirm the response is correct
    setData(blankData);
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:{" "}
        <input
          type="text"
          name="userId"
          onChange={handleChange}
          value={data.userId}
          required
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={data.password}
          required
        />
      </label>
      <label>
        Confirm Password:{" "}
        <input
          type="password"
          name="confirm"
          onChange={handleChange}
          value={data.confirm}
          required
        />
      </label>
      <label>
        Account Type:
        <select name="accountType" onChange={handleChange}>
          <option value="" selected={data.accountType === "" ? true : false}>
            Select an Option
          </option>
          {accountTypes.map((type, index) => (
            <option
              value={type}
              key={index}
              selected={data.accountType === type ? true : false}
            >
              {type}
            </option>
          ))}
        </select>
      </label>
      <button>Create</button>
    </form>
  );
};

export default SignUpForm;
