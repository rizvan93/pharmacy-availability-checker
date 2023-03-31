const User = require("../models/user");

const create = (req, res) => {
  res.status(200).json({ message: "create new user" });
};

// const login -> We do together

const index = async (req, res) => {
  try {
    const foundUsers = await User.find({});
    res.status(200).json(foundUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  create,
  index,
  update,
  delete: deleteUser,
};
