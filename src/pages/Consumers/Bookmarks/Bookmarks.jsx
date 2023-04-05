import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

export default function Bookmarks() {
  const [consumer, setConsumer] = useState(null);
  const [bookmarkedMedicines, setBookmarkedMedicines] = useState([]);
  const [bookmarkedPharmacists, setBookmarkedPharmacists] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    if (token) {
      const decodedToken = jwt_decode(token);
      console.log("decodedToken: ", decodedToken);
      async function fetchConsumerData() {
        const response = await fetch(
          `/api/consumers/${decodedToken.accountId}`
        );
        console.log("Response: ", response);
        const data = await response.json();
        console.log("Consumer: ", data);
        setConsumer(data);
      }
      fetchConsumerData();
    }
  }, []);

  useEffect(() => {
    if (consumer) {
      async function fetchData() {
        // Fetch the data for the bookmarked medicines
        const medicineResponses = await Promise.all(
          consumer.bookmarkedMedicines.map(async (medicineId) => {
            const response = await fetch(`/api/medicines/${medicineId}`);
            const data = await response.json();
            return data;
          })
        );
        setBookmarkedMedicines(medicineResponses);

        // Fetch the data for the bookmarked pharmacists
        const pharmacistResponses = await Promise.all(
          consumer.bookmarkedPharmacists.map(async (pharmacistId) => {
            const response = await fetch(`/api/pharmacists/${pharmacistId}`);
            const data = await response.json();
            return data;
          })
        );
        setBookmarkedPharmacists(pharmacistResponses);
      }
      fetchData();
    }
  }, [consumer]);

  return (
    <div>
      <h2>Consumer Details</h2>
      {consumer ? (
        <>
          <p>Email: {consumer.email}</p>

          <h3>Bookmarked Medicines</h3>
          <ul>
            {bookmarkedMedicines.map((medicine) => (
              <li key={medicine._id}>{medicine.name}</li>
            ))}
          </ul>

          <h3>Bookmarked Pharmacists</h3>
          <ul>
            {bookmarkedPharmacists.map((pharmacist) => (
              <li key={pharmacist._id}>{pharmacist.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>No consumer data found.</p>
      )}
    </div>
  );
}
