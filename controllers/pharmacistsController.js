const Pharmacist = require("../models/Pharmacist");
const Store = require("../models/Store");
const User = require("../models/User");

const seed = async (req, res) => {
  try {
    // const newStore = await Store.create({
    //   name: "Orchard Ion",
    //   location: "Orchard Road",
    //   pharmacists: [newPharmacist._id],
    // });
    // const newPharmacist = await Pharmacist.create({
    //   name: "Kelly Lee",
    //   defaultStore: newStore._id,
    //   checkedInStore: null,
    // });
    // const newUser = await User.create({
    //   userId: "kellylee@gmail.com",
    //   password: "1234",
    //   accountType: "Pharmacist",
    //   accountId: newPharmacist._id,
    // });
    const newStore = await Store.create({
      name: "Paragon",
      location: "Orchard Road",
    });
    const newPharmacist = await Pharmacist.create({
      name: "Mike Loh",
      defaultStore: newStore._id,
      checkedInStore: null,
    });
    const newUser = await User.create({
      userId: "mikeloh@gmail.com",
      password: "1234",
      accountType: "Pharmacist",
      accountId: newPharmacist._id,
    });
    res.status(200).json(newUser);
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({ error });
  }
};

const edit = async (req, res) => {};

module.exports = { seed, edit };
