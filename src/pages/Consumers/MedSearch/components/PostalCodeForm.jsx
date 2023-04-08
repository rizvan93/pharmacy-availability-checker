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
<form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
  <h1 className="text-3xl font-bold text-center mb-5 text-wAqua font-semibold">Find Medicines Near Me</h1>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="postalCode"></label>
    <input name="postalCode" value={postalCode} onChange={handleChange} className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="postalCode" type="text" placeholder="Enter your postal code" />
  </div>
  <div className="flex items-center justify-between">
    <button type="button" onClick={getLocation} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Use current location (not in use)
    </button>
    <button type="submit" className="bg-wAqua hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Find Medicines Near Me
    </button>
  </div>
</form>

  );
};

export default PostalCodeForm;
