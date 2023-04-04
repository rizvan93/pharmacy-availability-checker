import { useState, useEffect } from 'react';

export default function CheckOut() {
  const [checkedInStore, setCheckedInStore] = useState('Loading...');
  const [pharmacistId, setPharmacistId] = useState('');

  useEffect(() => {
    // Fetch the pharmacist ID from local storage
    const storedPharmacistId = "642a7adfa62d990d48d0047d";
    setPharmacistId(storedPharmacistId);

    // Fetch the currently checkedIn store for the pharmacist
    if (storedPharmacistId) {
      fetch(`/api/stores/${storedPharmacistId}/checkedIn`)
        .then(response => response.json())
        .then(data => {
          if (data) {
            setCheckedInStore(data.name + ' - ' + data.location);
          } else {
            setCheckedInStore('Not currently checked in to any store');
          }
        })
        .catch(error => console.error(error));
    } else {
      setCheckedInStore('Not currently checked in to any storeXXX');
    }
  }, []);

  const handleCheckOut = () => {
    const storeId = localStorage.getItem('storeId');
    console.log(storeId)
    fetch(`/api/stores/pharmacists/${pharmacistId}/checkout`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ storeId }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Checked out successfully!');
          setCheckedInStore('Not currently checked in to any store');
        } else {
          alert('Failed to check outXXX!');
        }
      })
      .catch((error) => console.error(error));
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
