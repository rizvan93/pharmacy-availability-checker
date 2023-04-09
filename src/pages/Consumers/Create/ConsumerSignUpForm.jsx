import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ConsumerSignUpForm() {
  const [newUser, setNewUser] = useState({
    name: "",
    userId: "", //also consumer.email
    password: "",
  });
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

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
      navigate("/")
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  return (
<form onSubmit={handleSubmit} className="w-full bg-white rounded-lg shadow-md border-gray-300 md:mt-0 sm:max-w-md">
  <div className="px-4 py-3 bg-wAqua-5 sm:p-6">
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="name"></label>
      <input name="name" value={newUser.name} onChange={handleChange} className="text-center shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="userId"></label>
      <input name="userId" type="email" value={newUser.userId} onChange={handleChange} className="text-center shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userId" placeholder="Enter your email address" />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="password"></label>
      <input name="password" type="password" value={newUser.password} onChange={handleChange} className="text-center shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Enter a password" />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="confirm"></label>
      <input type="password" value={confirm} onChange={(e) => { setConfirm(e.target.value); }} className="text-center shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirm" placeholder="Confirm your password" />
    </div>

    <div className=" flex items-center justify-center">
      <button type="submit" className="bg-wAqua text-white rounded-md px-5 py-2 w-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wAqua">
        Register
      </button>
    </div>
  </div>
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
