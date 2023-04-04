const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const EXPIRIES = {
  Admin: "6h",
  Pharmacist: "3d",
  Consumer: "7d",
};

const seed = async (req, res) => {
  const newUser = await User.create({
    name: "Admin",
    userId: "admin",
    password: "password",
    accountType: "admin",
  });
  res.status(200).json(newUser);
};

const create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { userId, password } = req.body;
  const userAttempt = { userId, password };

  try {
    const user = await User.findOne({ userId: userAttempt.userId });
    if (!user) {
      return res.status(404).json({ message: "wrong user" });
    }
    const passwordMatch = await bcrypt.compare(
      userAttempt.password,
      user.password
    );
    if (!passwordMatch) {
      return res.status(404).json({ message: "wrong password" });
    }

    const payload = {
      name: user.name,
      accountType: user.accountType,
      accountId: user.accountId,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: EXPIRIES[user.accountType],
    });

    return res.status(200).json(token);
  } catch (error) {
    res.status(500).json(error);
  }
};

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
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
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

const show = async (req, res) => {
  try {
    const showUser = await User.findById(req.params.id);
    res.status(200).send(showUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  create,
  login,
  index,
  update,
  delete: deleteUser,
  show,
  seed,
};
