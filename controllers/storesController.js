const Store = require("../models/Store");
const Pharmacist = require("../models/Pharmacist");

const seed = async (req, res) => {
  try {
    const newStore = await Store.create({
      name: "Store 1",
      location: "ttt",
    });
    res.status(200).json(newStore);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const create = async (req, res) => {
  if (!req.body.name)
    res.status(400).json({ error: "New store must have a name" });
  if (!req.body.location)
    res.status(400).json({ error: "New store must have a location" });

  try {
    const newStore = await Store.create(req.body);
    res.status(200).json(newStore);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const show = async (req, res) => {
  const { id } = req.params;
  try {
    const store = await Store.findById(id);
    if (store) {
      return res.status(200).json(store);
    }
    return res.status(404).json({ error: "store not found" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const index = async (req, res) => {
  try {
    const stores = await Store.find({});
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteStore = async (req, res) => {
  const { id } = req.params;
  try {
    await Store.findByIdAndDelete(id);
    res.status(200);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const updatedStore = req.body;
  console.log(updatedStore);

  try {
    if (!updatedStore) return res.status(400).json({ error: "error updating" });
    const store = await Store.findByIdAndUpdate(id, updatedStore, {
      new: true,
    });
    console.log(store);
    res.status(200).json(store);
  } catch (error) {
    res.status(500).json({ error });
  }
};

//-------------------------------------------Pharmacist
const allStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).json(stores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const checkIn = async (req, res) => {
  try {
    const pharmacist = req.params.id;
    const store = await Store.findById(req.body.storeId);

    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    store.pharmacists.addToSet(pharmacist);
    await store.save();

    res.status(200).json({ message: "Check-in successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error });
  }
};

const showCheckedInStore = async (req, res) => {
  const pharmacistId = req.params.id;

  const stores = await Store.find({
    pharmacists: pharmacistId,
  });
  res.status(200).json(stores);
};

const checkoutPharmacist = async (req, res) => {
  // try {
  //   const pharmacistId = req.params.id;
  //   const pharmacist = await Pharmacist.findById(pharmacistId);
  //   if (!pharmacist) {
  //     return res.status(404).json({ message: "Pharmacist not found" });
  //   }
  //   const storeId = pharmacist.defaultStore;
  //   if (!storeId) {
  //     return res
  //       .status(404)
  //       .json({ message: "Pharmacist is not checked in to any store" });
  //   }
  //   const store = await Store.findOne({
  //     pharmacists: pharmacistId,
  //   });
  //   if (!store) {
  //     return res.status(404).json({ message: "Store not found" });
  //   }
  //   store.pharmacists = store.pharmacists.filter(
  //     (id) => id.toString() !== pharmacistId
  //   );
  //   await store.save();
  //   pharmacist.defaultStore = null;
  //   await pharmacist.save();
  //   res.status(200).json({ message: "Pharmacist checked out successfully" });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Server Error" });
  // }
};

module.exports = {
  create,
  show,
  index,
  delete: deleteStore,
  update,
  seed,

  allStores, //Drop down box of all stores for the pharmacist to select to checkinto
  checkIn, // Pharmacist to checkin to selected store
  showCheckedInStore, // CheckOut page of currently check-ed in store
  checkoutPharmacist, // Checkout button
};
