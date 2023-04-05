import { useState } from "react";

const PostalCodeForm = () => {
  const [postalCode, setPostalCode] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Find medicines near postal code");
  };

  const handleChange = (event) => {
    setPostalCode(event.target.value);
  };

  const getLocation = (event) => {
    event.preventDefault();
    //to update using info from https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Postal Code:
        <input name="postalCode" value={postalCode} onChange={handleChange} />
      </label>
      <button type="button" onClick={getLocation}>
        Use current location (not in use)
      </button>
      <button>Find medicines near me</button>
    </form>
  );
};

export default PostalCodeForm;
