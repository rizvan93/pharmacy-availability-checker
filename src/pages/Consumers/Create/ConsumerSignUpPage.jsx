import { useEffect } from "react";
import ConsumerSignUpForm from "./ConsumerSignUpForm";

export default function ConsumerSignUpPage({ setHome }) {
  useEffect(() => {
    setHome(true);
  }, []);

  return (
    <>
      <h2>New User Sign Up</h2>
      <ConsumerSignUpForm />
    </>
  );
}
