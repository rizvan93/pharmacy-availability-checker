const Pharmacist = require("../models/Pharmacist");
const Store = require("../models/Store");

const checkIn = async (req, res) => {
  const { storeId } = req.body;
  const pharmacist = await Pharmacist.findById(req.user._id);
  const store = await Store.findById(storeId);
  try {
    if (!store) {
      return res.status(404).json({ error: "Store not found" });
    }
    pharmacist.checkedInStore = store._id;
    await pharmacist.save();
    return res.status(200).json({ message: `Checked in to ${store.name}` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};

const checkOut = async (req, res) => {
  const pharmacist = await Pharmacist.findById(req.user._id);
  try {
    if (!pharmacist.checkedInStore) {
      return res.status(400).json({ error: "Not checked in to any store" });
    }
    const store = await Store.findById(pharmacist.checkedInStore);
    pharmacist.checkedInStore = null;
    await pharmacist.save();
    return res.status(200).json({ message: `Checked out from ${store.name}` });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

module.exports = (checkIn, checkOut);
