import { useEffect } from "react";
import ConsumerSignUpForm from "./ConsumerSignUpForm";

export default function ConsumerSignUpPage({ setHome }) {
  useEffect(() => {
    setHome(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-white grounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
      <h2>New User Sign Up</h2>
      <ConsumerSignUpForm />
    </div>
    </div>
  );
}
