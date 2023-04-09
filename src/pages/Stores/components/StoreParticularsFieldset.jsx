const StoreParticularsFieldset = ({ form, setForm }) => {
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  if (form) {
    return (
      <>
        <label className="font-semibold">Name: </label>{" "}
        <input name="name" value={form.name} onChange={handleChange} required />
        <br />
        <label className="font-semibold">Street Address: </label>
        <input
          name="streetAddress"
          value={form.streetAddress}
          onChange={handleChange}
          placeholder="eg: 79 Anson Road"
          required
        />
        <br />
        <label className="font-semibold">Unit Number: </label>
        <input
          name="unitNumber"
          value={form.unitNumber}
          onChange={handleChange}
          placeholder="eg: #20-01"
          required
        />
        <br />
        <label className="font-semibold">Postal Code: </label>
        <input
          name="postalCode"
          value={form.postalCode}
          onChange={handleChange}
          placeholder="eg: 079906"
          required
        />
      </>
    );
  }
};

export default StoreParticularsFieldset;
