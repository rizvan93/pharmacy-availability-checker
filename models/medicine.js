const mongoose = require("mongoose");
const { Schema } = mongoose;

const medicineSchema = new Schema(
  {
    brand: { type: String, required: true },
    type: { type: String, required: true },
    dose: { type: Number, required: true, min: 1 },
    uom: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Medicine", medicineSchema);
