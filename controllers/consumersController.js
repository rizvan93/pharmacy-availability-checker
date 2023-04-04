const Consumer = require("../models/Consumer");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

// const show = (req, res) => {
//   res.status(200).json({ message: "show consumer" });
// };

const seed = async (req, res) => {
  try {
    const newConsumer = await Consumer.create({
      email: "newconsumer@gmail.com",
    });
    const newUser = await User.create({
      userId: newConsumer.email,
      password: "1234",
      accountType: "Consumer",
      accountId: newConsumer._id,
    });
    res.status(200).json(newConsumer);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const create = async (req, res) => {
  const { name, userId, password } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "Please enter an email address" });
  }

  try {
    const newConsumer = await Consumer.create({ email: userId });
    const user = {
      name,
      userId,
      password,
      accountType: "Consumer",
      accountId: newConsumer._id,
    };
    console.log(user);
    const newUser = await User.create(user);

    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const updateBookmarkedMedicines = async (req, res) => {
  const { consumerId } = req.params;
  const { medicineId } = req.body;

  try {
    const consumer = await Consumer.findById(consumerId);
    const bookmarkedMedicines = consumer.bookmarkedMedicines;

    // check if the medicineId already exists in the array
    const index = bookmarkedMedicines.indexOf(medicineId);

    if (index === -1) {
      // if the medicineId does not exist, add it to the array
      bookmarkedMedicines.push(medicineId);
    } else {
      // if the medicineId exists, remove it from the array
      const updatedBookmarkedMedicines = bookmarkedMedicines.filter(
        (id) => id !== medicineId
      );
      consumer.bookmarkedMedicines = updatedBookmarkedMedicines;
    }

    const updatedConsumer = await consumer.save();
    res.json(updatedConsumer);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//   res.status(200).json({ message: "updated Bookedmarked Medicines" });
// };

const updateBookmarkedPharmacists = async (req, res) => {
  const { consumerId } = req.params;
  const { medicineId } = req.body;

  try {
    const consumer = await Consumer.findById(consumerId);
    const bookmarkedPharmacists = consumer.bookmarkedPharmacists;

    // check if the medicineId already exists in the array
    const index = bookmarkedPharmacists.indexOf(medicineId);

    if (index === -1) {
      // if the medicineId does not exist, add it to the array
      bookmarkedPharmacists.push(medicineId);
    } else {
      // if the medicineId exists, remove it from the array
      const updatedBookmarkedPharmacists = bookmarkedPharmacists.filter(
        (id) => id !== medicineId
      );
      consumer.bookmarkedPharmacists = updatedBookmarkedPharmacists;
    }

    const updatedConsumer = await consumer.save();
    res.json(updatedConsumer);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  create,
  updateBookmarkedMedicines,
  updateBookmarkedPharmacists,
  seed,
};