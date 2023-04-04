import { useState } from "react";

export default function ConsumerSignUpForm() {
  const [newUser, setNewUser] = useState({
    name: "",
    userId: "", //also consumer.email
    password: "",
  });
  const [confirm, setConfirm] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (confirm !== newUser.password) {
      window.alert("passwords must match");
      return;
    }

    try {
      console.log(newUser);
      const res = await fetch("/api/consumers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" value={newUser.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="userId"
          value={newUser.userId}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirm}
          onChange={(e) => {
            setConfirm(e.target.value);
          }}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

//   return (
//     <>
//       <fieldset>
//         <legend>Sign Up</legend>
//         <label>Email:</label>
//         <input></input>
//         <label>Password:</label>
//         <input></input>
//         <button><Register></Register></button>
//       </fieldset>
//     </>
//   );
// }
