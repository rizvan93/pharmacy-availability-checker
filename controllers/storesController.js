const Store = require("../models/Store");

const seed = async (req, res) => {
  try {
    const newStore = await Store.create({
      name: "Store 2",
      location: "Somewhere else in Singapore",
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

module.exports = { index, seed };
