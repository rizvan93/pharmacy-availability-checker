const Store = require("../models/Store");

const PHARMACISTS_PROJECTION = {
  defaultStore: 0,
  createdAt: 0,
  updatedAt: 0,
  __v: 0,
};

const STORES_PROJECTION_PHARMACISTS_QUERY = {
  stocks: 0,
  createdAt: 0,
  updatedAt: 0,
  __v: 0,
};

const STORES_PROJECTION_MEDICINES_QUERY = {
  name: 1,
  streetAddress: 1,
  unitNumber: 1,
  postalCode: 1,
  lat: 1,
  lon: 1,
  pharmacists: 1,
  "stocks.$": 1,
};

const seed = async (req, res) => {
  try {
    const newStore = await Store.create(
      {
        name: "JEM",
        streetAddress: "123 Jurong East Street",
        unitNumber: "01-23",
        postalCode: "608550",
        lat: 1.33316425,
        lon: 103.74359864534739,
        pharmacists: [],
        stocks: [],
      },
      {
        name: "Waterway Point",
        streetAddress: "123 Punggol Street",
        unitNumber: "01-23",
        postalCode: "828761",
        lat: 1.4065858,
        lon: 103.9021620888889,
        pharmacists: [],
        stocks: [],
      }
    );
    res.status(200).json(newStore);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const create = async (req, res) => {
  if (!req.body.name)
    res.status(400).json({ error: "New store must have a name" });
  if (!req.body.streetAddress)
    res.status(400).json({ error: "New store must have an address" });
  if (!req.body.postalCode)
    res.status(400).json({ error: "New store must have a postal code" });

  try {
    const newStore = await Store.create(req.body);

    res.status(200).json(newStore);
  } catch (error) {
    res.status(500).json(error);
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
    return res.status(200).json(stores);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const queryAvailability = async (req, res) => {
  const { field, fieldId } = req.query;

  const stores = [];
  try {
    if (field === "medicines") {
      const storesWithMedicine = await Store.find(
        {
          "stocks.medicine": fieldId,
          "stocks.quantity": { $gt: 0 },
        },
        STORES_PROJECTION_MEDICINES_QUERY
      ).populate("pharmacists", PHARMACISTS_PROJECTION);

      if (!storesWithMedicine) {
        return res.status(404).json({ message: "No available medicines" });
      }
      stores.push(...storesWithMedicine);
    } else if (field === "pharmacists") {
      const storesWithPharmacist = await Store.find(
        {
          pharmacists: { $exists: true, $not: { $size: 0 } },
        },
        STORES_PROJECTION_PHARMACISTS_QUERY
      ).populate("pharmacists", PHARMACISTS_PROJECTION);

      if (!storesWithPharmacist) {
        return res.status(404).json({ message: "No available pharmacists" });
      }
      stores.push(...storesWithPharmacist);
    } else {
      return res.status(404).json({ message: "invalid query" });
    }
    return res.status(200).json(stores);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
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
    if (!updatedStore)
      return res.status(400).json({ message: "error updating" });
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
const checkIn = async (req, res) => {
  try {
    const pharmacistId = req.params.id; //token.user
    const store = await Store.findById(req.params.storeId);
    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }
    // Find the store where the pharmacist is currently checked in
    const currentStore = await Store.findOne({ pharmacists: pharmacistId });
    if (currentStore) {
      // If the pharmacist is already checked into a store, remove them from that store
      currentStore.pharmacists.pull(pharmacistId);
      await currentStore.save();
    }
    // Check the pharmacist into the new store
    store.pharmacists.addToSet(pharmacistId);
    await store.save();
    res.status(200).json({ message: "Check-in successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
const showCheckedInStore = async (req, res) => {
  const pharmacistId = req.params.id;
  const store = await Store.findOne({
    pharmacists: pharmacistId,
  });
  res.status(200).json(store);
};

module.exports = {
  create,
  show,
  index,
  delete: deleteStore,
  update,
  queryAvailability,
  seed,

  checkIn,
  showCheckedInStore,
};
