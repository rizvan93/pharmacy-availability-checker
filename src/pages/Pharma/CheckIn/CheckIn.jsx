import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 

export default function CheckIn() {
  const { id } = useParams(); // get the id parameter from the URL
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState('');
  const [pharmacist, setPharmacist] = useState(null);
      const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/pharmacists/${id}`) // use the id parameter in the fetch URL
      .then(response => response.json())
      .then(data => setPharmacist(data))
      .catch(error => console.error(error));
     
    fetch('/api/stores')
      .then(response => response.json())
      .then(data => setStores(data))
      .catch(error => console.error(error));
  }, [id]); // add id as a dependency of the useEffect hook

  const handleSelectStore = (event) => {
    setSelectedStore(event.target.value);
  };

const handleCheckIn = () => {

fetch(`/api/stores/pharmacists/${selectedStore}/checkin`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ storeId: selectedStore })
})
    .then(response => {
      if (response.ok) {
        navigate(`/pharmacists/${id}/checkout`)
      } else {
        alert('Failed to check in!');
      }
    })
    .catch(error => console.error(error));
};

  if (!pharmacist) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Check In</h1>
      <p>Pharmacist: {pharmacist.name}</p>
      <label>
        Select a store:
        <select value={selectedStore} onChange={handleSelectStore}>
          <option value="">-- Select a store --</option>
          {stores.map(store => (
            <option key={store._id} value={store._id}>
              {store.name} - {store.location}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={handleCheckIn}>Check In</button>
    </>
  );
}