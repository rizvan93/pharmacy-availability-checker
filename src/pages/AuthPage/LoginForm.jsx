import { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState({
    userId: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your email or user Id:
        <input name="userId" value={user.userId} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input name="password" value={user.password} onChange={handleChange} />
      </label>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
