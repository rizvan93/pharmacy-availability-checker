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
  index,
  delete: deleteStore,
  seed,
};
