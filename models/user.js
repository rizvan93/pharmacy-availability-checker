const mongoose = require("mongoose");
const { Schema } = mongoose;

const accountTypes = ["Pharmacist", "Consumer", "InventoryManager", "Admin"];

const userSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true, minLength: 6 },
    password: { type: String, required: true },
    accountType: { type: String, enum: accountTypes, required: true },
    accountId: { type: mongoose.Types.ObjectId, refPath: "accountType" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
