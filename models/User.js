//changed to sentence case

const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const accountTypes = ["Pharmacist", "Admin", "Consumer"];
const SALT_ROUNDS = 10;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      enum: accountTypes,
      required: true,
    },
    accountId: {
      type: mongoose.Types.ObjectId,
      refPath: "accountType",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = mongoose.model("User", userSchema);
