import { useEffect } from "react";
import ConsumerSignUpForm from "./ConsumerSignUpForm";

export default function ConsumerSignUpPage({ setHome }) {
  useEffect(() => {
    setHome(false);
  }, []);

  return (
    <div className="flex h-full bg-wAqua-10 px-4 py-2">
      <div className="mt-1 w-full rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-5 text-center text-3xl font-semibold text-wAqua">
          New User Sign Up
        </h1>
        <ConsumerSignUpForm />
      </div>
    </div>
  );
}
