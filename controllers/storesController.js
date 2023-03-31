const Store = require("../models/Store");

const seed = async (req, res) => {
  try {
    const newStore = await Store.create({
      name: "Store 1",
      location: "Somewhere in Singapore",
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

module.exports = {
  create,
  show,
  index,
  delete: deleteStore,
  seed,
};
