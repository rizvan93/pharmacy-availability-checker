//changed to sentence case

const mongoose = require("mongoose");
const { Schema } = mongoose;

const stockSchema = new Schema(
  {
    medicine: {
      type: mongoose.Types.ObjectId,
      ref: "Medicine",
      required: true,
    },
    quantity: { type: Number, min: 0, required: true },
  },
  { timestamps: true }
);

const storeSchema = new Schema(
  {
    name: { type: String, required: true },
    streetAddress: { type: String, required: true },
    unitNumber: { type: String },
    postalCode: { type: String, required: true, match: /\d{6}/ },
    lat: { type: Number, min: -90, max: 90 },
    lon: { type: Number, min: -180, max: 180 },
    pharmacists: [{ type: mongoose.Types.ObjectId, ref: "Pharmacist" }],
    stocks: [stockSchema],
  },
  { timestamps: true }
);

storeSchema.pre("save", async function (next) {
  if (!this.isModified("postalCode")) return next();
  const response = await fetch(
    `https://geocode.maps.co/search?q={Singapore%20${this.postalCode}}`
  );
  const data = await response.json();
  const geocode = data.find((d) => d.type === "postcode");
  this.lat = geocode.lat;
  this.lon = geocode.lon;
  return next();
});

module.exports = mongoose.model("Store", storeSchema);
