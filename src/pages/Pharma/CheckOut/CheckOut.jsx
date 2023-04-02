import { useState, useEffect } from 'react';

export default function CheckOut() {
  const [checkedInStore, setCheckedInStore] = useState('');
  const [pharmacistId, setPharmacistId] = useState('');

  useEffect(() => {
  // Fetch the currently checkedIn store for the pharmacist
  fetch(`/api/stores/pharmacists/${pharmacistId}/checkedIn`)
    .then(response => response.json())
    .then(data => {
      if (data) {
        setCheckedInStore(data.name + ' - ' + data.location);
      } else {
        setCheckedInStore('Not currently checked in to any store');
      }
    })
    .catch(error => console.error(error));

  // Fetch the pharmacist ID from local storage
  const storedPharmacistId = localStorage.getItem('pharmacistId');
  setPharmacistId(storedPharmacistId);
}, []);

const handleCheckOut = () => {
  fetch(`/api/stores/pharmacists/${pharmacistId}/checkout`, { method: 'PUT' })
    .then(response => {
      if (response.ok) {
        alert('Checked out successfully!');
        setCheckedInStore('Not currently checked in to any store');
      } else {
        alert('Failed to check out!');
      }
    })
    .catch(error => console.error(error));
};

  return (
    <>
      <h1>Check Out</h1>
      <p>Currently checked in to: {checkedInStore}</p>
      <br />
      <button onClick={handleCheckOut}>Check Out</button>
    </>
  );
}
