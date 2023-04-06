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
  const ENTRIES_COUNT = 200;
  const LIQUID_QTYs = ["50 ml", "75 ml", "100 ml"];
  const PILL_QTYs = ["Pack of 12", "Pack of 24", "Pack of 48"];
  const POWDER_QTYs = ["75 g", "150g", "200g"];

  try {
    const response = await fetch(
      `https://data.gov.sg/api/action/datastore_search?resource_id=43668192-c352-4420-9731-01043c67c471&limit=${ENTRIES_COUNT}`
    );
    const data = await response.json();

    const rawMedicines = data.result.records;
    parsedMedicines = [];
    rawMedicines.forEach((m) => {
      const i = [];
      if (
        m.dosage_form.includes("TABLET") ||
        m.dosage_form.includes("CAPSULE") ||
        m.dosage_form.includes("LOZENGE")
      ) {
        i.push(...PILL_QTYs);
      } else if (
        m.dosage_form.includes("SYRUP") ||
        m.dosage_form.includes("SOLUTION")
      ) {
        i.push(...LIQUID_QTYs);
      } else if (m.dosage_form.includes("POWDER")) {
        i.push(...POWDER_QTYs);
      }

      i.forEach((qty) => {
        const medicine = {
          name: m.product_name || "medicine",
          manufacturer: m.manufacturer.split("&&")[0],
          form: m.dosage_form.split("&&")[0],
          quantity: qty,
          strength: m.strength.split("&&")[0],
        };
        parsedMedicines.push(medicine);
      });
    });

    const created = parsedMedicines.map((m) => Medicine.create(m));
    await Promise.all(created);
    res.status(200).json(parsedMedicines);
  } catch (error) {
    res.status(500).json(error);
  }
};

const index = async (req, res) => {
  const query = req.query || {};
  for (const key in query) {
    query[key] = new RegExp(`.*${query[key]}.*`, "i");
  }
  try {
    const medicines = await Medicine.find(query);
    res.status(200).json(medicines);
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

const show = async (req, res) => {
  const { id } = req.params;
  try {
    const medicine = await Medicine.findById(id);
    if (medicine) {
      return res.status(200).json(medicine);
    }
    return res.status(404).json({ error: "Medicine not found" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  create,
  seed,
  index,
  delete: deleteMedicine,
  update,
  show,
};
