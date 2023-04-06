const Store = require("../models/Store");

const seed = async (req, res) => {
  try {
    const newStore = await Store.create({
      name: "Store 1",
      streetAddress: "123 Main Street",
      unitNumber: "01-23",
      postalCode: "123456",
      lat: 1.3521,
      lon: 103.8198,
      pharmacists: [],
      stocks: [],
    });
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
  console.log(field, ": ", fieldId);

  const stores = [];
  try {
    if (field === "medicines") {
      const storesProjection = {
        name: 1,
        streetAddress: 1,
        unitNumber: 1,
        postalCode: 1,
        lat: 1,
        lon: 1,
        pharmacists: 1,
        "stocks.$": 1,
      };

      const storesWithMedicine = await Store.find(
        {
          "stocks.medicine": fieldId,
          "stocks.quantity": { $gt: 0 },
        },
        storesProjection
      );

      if (!storesWithMedicine) {
        return res.status(404).json({ message: "No available medicines" });
      }
      stores.push(...storesWithMedicine);
    } else if (field === "pharmacists") {
      const storesProjection = {
        stocks: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      };
      const pharmacistsProjection = {
        defaultStore: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      };

      const storesWithPharmacist = await Store.find(
        {
          pharmacists: { $exists: true, $not: { $size: 0 } },
        },
        storesProjection
      ).populate("pharmacists", pharmacistsProjection);

      if (!storesWithPharmacist) {
        return res.status(404).json({ message: "No available pharmacists" });
      }
      stores.push(...storesWithPharmacist);
    } else {
      return res.status(404).json({ message: "invalid query" });
    }
    console.log(stores);
    return res.status(200).json(stores);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
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
    const pharmacist = req.params.id; //token.user
    const store = await Store.findById(req.params.storeId); //------------

    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    store.pharmacists.addToSet(pharmacist);
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
  create,
  show,
  index,
  delete: deleteStore,
  update,
  queryAvailability,
  seed,

  checkIn, // Pharmacist to checkin to selected store
  showCheckedInStore, // CheckOut page of currently check-ed in store
  checkoutPharmacist, // Checkout button
};
