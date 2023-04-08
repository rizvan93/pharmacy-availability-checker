import { useEffect } from "react";

const PharmacistInfoPage = ({ setHome }) => {
  useEffect(() => {
    setHome(false);
  }, []);

  return <h1>Pharmacist Info</h1>;
};

export default PharmacistInfoPage;
