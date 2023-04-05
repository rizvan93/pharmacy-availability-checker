const StoreParticularsFieldset = ({ form, setForm }) => {
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  if (form) {
    return (
      <>
        <label>
          Name:{" "}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Street Address:{" "}
          <input
            name="streetAddress"
            value={form.streetAddress}
            onChange={handleChange}
            placeholder="eg: 79 Anson Road"
            required
          />
        </label>
        <label>
          Unit Number:{" "}
          <input
            name="unitNumber"
            value={form.unitNumber}
            onChange={handleChange}
            placeholder="eg: #20-01"
            required
          />
        </label>
        <label>
          Postal Code:{" "}
          <input
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            placeholder="eg: 079906"
            required
          />
        </label>
      </>
    );
  }
};

export default StoreParticularsFieldset;
