import { useEffect } from "react";
import ConsumerSignUpForm from "./ConsumerSignUpForm";

export default function ConsumerSignUpPage({ setHome }) {
  useEffect(() => {
    setHome(true);
  }, []);

return (
<div className="bg-wAqua-10 min-h-screen flex items-center justify-center px-4">
  <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 mt-1">
    <h1 className="text-3xl font-bold text-center mb-5 text-wAqua font-semibold">New User Sign Up</h1>
    <ConsumerSignUpForm />
  </div>
</div>

);

}
