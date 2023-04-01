import { useState } from "react";
import MedAvailabilitySearch from "./MedAvailabilitySearch";

export default function MedAvailability() {
  // const [medicines, setMedicines] = useState(null)

  // useEffect(() => {
  //   const getMedicines = async () => {
  //     const response = await fetch("/api/medicines")
  //     const data = await response.json()
  //     setMedicines(data)
  //   };
  //   getMedicines()
  // }, [])

  return (
    <>
      <MedAvailabilitySearch />
    </>
  );
}
