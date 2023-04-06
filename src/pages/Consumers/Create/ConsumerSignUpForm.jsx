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
    <form onSubmit={handleSubmit}
    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md">
      <label>
        Name:
        <input name="name" 
        value={newUser.name} 
        onChange={handleChange} 
        className=" border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2. dark:border-gray-600 dark:text-white"/>
      </label>
      <label>
        Email:
        <input
          type="email"
          name="userId"
          value={newUser.userId}
          onChange={handleChange}
          className=" border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600"/>
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
          className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2. dark:border-gray-600 dark:text-white"
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirm}
          className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2. dark:border-gray-600 dark:text-white"
          onChange={(e) => {
            setConfirm(e.target.value);
          }}
        />
      </label>
      <br />
      <button type="submit" className="w-full text-white bg-wAqua font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
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
