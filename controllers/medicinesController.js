const Medicine = require("../models/Medicine");

const create = async (req, res) => {
  try {
    const createdMedicine = await Medicine.create(req.body);
    res.status(201).json(createdMedicine);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const seed = async (req, res) => {
  try {
      const newMedicine = await Medicine.create({
        name: "Paracetamol",
        type: "tablet",
        packCount: "16",
        dose: 500,
        uom: "mg",
      });
    res.status(200).json(newMedicine);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const show = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    res.status(200).json(medicine);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const index = async (req, res) => {
  try {
    const allMedicines = await Medicine.find({});
    res.status(200).json(allMedicines);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteMedicine = async (req, res) => {
  try {
    const deletedMedicine = await Medicine.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedMedicine);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const update = async (req, res) => {
  try {
    const updatedMedicine = await Medicine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedMedicine);
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  create,
  seed,
  index,
  delete: deleteMedicine,
  show,
  update,
};