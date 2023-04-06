//changed to sentence case

const mongoose = require("mongoose");
const { Schema } = mongoose;

const consumerSchema = new Schema(
  {
    bookmarkedMedicines: [{ type: mongoose.Types.ObjectId, ref: "Medicine" }],
    bookmarkedPharmacists: [
      { type: mongoose.Types.ObjectId, ref: "Pharmacist" },
    ],
    email: { type: String, trim: true, lowercase: true, required: true },
    // contact: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Consumer", consumerSchema);
