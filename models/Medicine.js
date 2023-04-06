//changed to sentence case

const mongoose = require("mongoose");
const { Schema } = mongoose;

const medicineSchema = new Schema(
  {
    name: { type: String, required: true, lowercase: true, trim: true },
    manufacturer: { type: String, required: true, lowercase: true, trim: true },
    form: { type: String, required: true, lowercase: true, trim: true },
    quantity: { type: String, required: true, lowercase: true, trim: true },
    strength: { type: String, required: true, lowercase: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Medicine", medicineSchema);
