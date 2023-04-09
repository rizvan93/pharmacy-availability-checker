const Pharmacist = require("../models/Pharmacist");
const Store = require("../models/Store");

const seed = async (req, res) => {
  try {
    const newPharmacist = await Pharmacist.create({
      _id: "64269b9f2cf242496159be2f",
      name: "Sun",
      defaultStore: "64269b592cf242496159be27",
    });
    res.status(200).json(newPharmacist);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const show = async (req, res) => {
  try {
    const pharmacist = await Pharmacist.findById(req.params.id).populate(
      "defaultStore"
    );
    if (!pharmacist) {
      res.status(404).json({ message: "Pharmacist not found" });
    } else {
      res.status(200).json(pharmacist);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, defaultStore } = req.body;

    const updatedPharmacist = await Pharmacist.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    // const store = await Store.findOne({ name: defaultStore });
    // updatedPharmacist.defaultStore = store._id;
    // await updatedPharmacist.save();

    let store = null;
    if (defaultStore) {
      store = await Store.findOne({ name: defaultStore });
      if (!store) {
        return res.status(404).json({ message: "Store not found" });
      }
    }

    updatedPharmacist.defaultStore = store ? store._id : null;
    await updatedPharmacist.save();

    res.status(200).json({ updatedPharmacist });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const checkoutPharmacist = async (req, res) => {
  try {
    const pharmacist = req.params.id;
    const store = await Store.findById(req.body.storeId);
    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }
    store.pharmacists.pull(pharmacist);
    await store.save();
    res.status(200).json({ message: "Check-out successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = {
  seed,
  show,
  update,
  checkoutPharmacist,
};
