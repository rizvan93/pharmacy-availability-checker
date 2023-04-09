import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import MedicineCard from "./MedicineCard";
import PharmacistCard from "./PharmacistCard";

export default function Bookmarks({ setPage, user }) {
  // const [consumer, setConsumer] = useState(null);
  const [bookmarkedMedicines, setBookmarkedMedicines] = useState([]);
  const [bookmarkedPharmacists, setBookmarkedPharmacists] = useState([]);
  const [showMedicines, setShowMedicines] = useState(true);
  const [showPharmacists, setShowPharmacists] = useState(false);

  useEffect(() => {
    if (!user) return;
    setPage();

    const token = localStorage.getItem("token");
    // console.log("token", token);
    // if (token) {
    //   const decodedToken = jwt_decode(token);
    //   console.log("decodedToken: ", decodedToken);
    const fetchConsumerBookmarks = async () => {
      try {
        const medicinesResponse = await fetch(
          `/api/consumers/${user?.accountId}/?field=medicines`,
          {
            headers: {
              Authorization: ["bearer", token],
            },
          }
        );

        const medicinesData = await medicinesResponse.json();
        setBookmarkedMedicines(medicinesData);
        const pharmacistsResponse = await fetch(
          `/api/consumers/${user?.accountId}/?field=pharmacists`,
          {
            headers: {
              Authorization: ["bearer", token],
            },
          }
        );
        const pharmacistsData = await pharmacistsResponse.json();
        setBookmarkedPharmacists(pharmacistsData);
      } catch (error) {
        console.error(error);
      }

      // console.log("Response: ", response);
      // const data = await response.json();
      // console.log("Consumer: ", data);
      // setConsumer(data);
    };
    fetchConsumerBookmarks();
  }, [user]);

  const removePharmacist = (pharmacistId) => () => {
    console.log("removePharmacist fired");
    setBookmarkedPharmacists(
      bookmarkedPharmacists.filter((p) => p._id !== pharmacistId)
    );
  };

  const removeMedicine = (medicineId) => () => {
    console.log("removeMedicine fired");
    setBookmarkedMedicines(
      bookmarkedMedicines.filter((m) => m._id !== medicineId)
    );
  };

  // useEffect(() => {
  //   if (consumer) {
  //     async function fetchData() {
  //       // Fetch the data for the bookmarked medicines
  //       const medicineResponses = await Promise.all(
  //         consumer.bookmarkedMedicines.map(async (medicineId) => {
  //           const response = await fetch(`/api/medicines/${medicineId}`);
  //           const data = await response.json();
  //           return data;
  //         })
  //       );
  //       setBookmarkedMedicines(medicineResponses);

  //       // Fetch the data for the bookmarked pharmacists
  //       const pharmacistResponses = await Promise.all(
  //         consumer.bookmarkedPharmacists.map(async (pharmacistId) => {
  //           const response = await fetch(`/api/pharmacists/${pharmacistId}`);
  //           const data = await response.json();
  //           return data;
  //         })
  //       );
  //       setBookmarkedPharmacists(pharmacistResponses);
  //     }
  //     fetchData();
  //   }
  // }, [consumer]);

  const handleMedicinesClick = () => {
    setShowMedicines(true);
    setShowPharmacists(false);
  };

  const handlePharmacistsClick = () => {
    setShowMedicines(false);
    setShowPharmacists(true);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex min-w-full items-center justify-around border-b-2 border-wAqua bg-wAqua-5 pb-2 pt-1">
        <button
          onClick={handleMedicinesClick}
          className={`${
            showMedicines
              ? "border-b-4 border-wAqua text-wAqua"
              : "text-wAqua-50"
          } px-2.5 font-semibold`}
        >
          Medicines
        </button>
        <button
          onClick={handlePharmacistsClick}
          className={`${
            showPharmacists
              ? "border-b-4 border-wAqua  text-wAqua"
              : "text-wAqua-50"
          } px-2.5 font-semibold`}
        >
          Pharmacists
        </button>
      </div>
      <div className=""></div>

      {showMedicines && (
        <div className="ml-2 flex-col divide-y divide-solid overflow-y-auto">
          {/* <h2>Bookmarked Medicines</h2> */}
          {bookmarkedMedicines?.map((medicine) => (
            <div className="my-2" key={medicine._id}>
              {/* <h3 className="font-bold">{medicine.name}</h3> */}
              <MedicineCard
                medicine={medicine}
                id={user.accountId}
                removeMedicine={removeMedicine}
              />
            </div>
          ))}
        </div>
      )}

      {showPharmacists && (
        <div className="ml-2 divide-y divide-solid overflow-y-auto ">
          {/* <h2>Bookmarked Pharmacists</h2> */}
          {bookmarkedPharmacists?.map((pharmacist) => (
            <div key={pharmacist._id}>
              {/* <h3>Pharmacist ID: {pharmacist._id}</h3> */}
              <PharmacistCard
                pharmacist={pharmacist}
                id={user.accountId}
                removePharmacist={removePharmacist}
              />
            </div>
          ))}
        </div>
      )}

      {/* <h2 className="mt-2">Consumer Details</h2>
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
      )} */}
    </div>
  );
}
