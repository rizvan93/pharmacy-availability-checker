const Pharmacist = require("../models/pharmacist");

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

const Index = async (req, res) => {
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

module.exports = {
  seed,
  Index,
};
