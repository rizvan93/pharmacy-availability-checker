import { useEffect } from "react";

export default function PharmAvailability({ setHome }) {
  useEffect(() => {
    setHome(false);
  }, []);
  return (
    <>
      <h1>List of Pharmacists</h1>
    </>
  );
}
