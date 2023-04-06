const Consumer = require("../models/Consumer");
const User = require("../models/User");

const BOOKMARKS = {
  medicines: "bookmarkedMedicines",
  pharmacists: "bookmarkedPharmacists",
};

const show = async (req, res) => {
  const { id } = req.params;
  const { field } = req.query;

  if (!BOOKMARKS[field]) {
    return res.status(404).json({ message: "Invalid field" });
  }

  try {
    const consumer = await Consumer.findById(id).populate([
      "bookmarkedMedicines",
      "bookmarkedPharmacists",
    ]);
    if (!consumer) {
      return res.status(404).json({ message: "Invalid consumer" });
    }

    const bookmarks = consumer[BOOKMARKS[field]];
    res.status(200).json(bookmarks);
  } catch (error) {
    res.status(500).json(error);
  }
};

const seed = async (req, res) => {
  try {
    const newConsumer = await Consumer.create({
      email: "newconsumer@gmail.com",
    });
    const newUser = await User.create({
      userId: newConsumer.email,
      password: "1234",
      accountType: "Consumer",
      accountId: newConsumer._id,
    });
    res.status(200).json(newConsumer);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const create = async (req, res) => {
  const { name, userId, password } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "Please enter an email address" });
  }

  try {
    const newConsumer = await Consumer.create({ email: userId });
    const user = {
      name,
      userId,
      password,
      accountType: "Consumer",
      accountId: newConsumer._id,
    };
    const newUser = await User.create(user);

    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { bookmarkId, field } = req.body;

  try {
    const consumer = await Consumer.findById(id);
    const bookmarks = consumer[BOOKMARKS[field]];

    if (bookmarks.includes(bookmarkId)) {
      const filteredBookmarks = bookmarks.filter(
        (b) => b.toString() !== bookmarkId
      );
      consumer[BOOKMARKS[field]] = filteredBookmarks;
    } else {
      bookmarks.push(bookmarkId);
    }
    const updatedConsumer = await consumer.save();
    res.status(200).json(updatedConsumer[BOOKMARKS[field]]);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// const show = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const store = await Consumer.findById(id);
//     if (store) {
//       return res.status(200).json(store);
//     }
//     return res.status(404).json({ error: "Consumer not found" });
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// };

module.exports = {
  create,
  update,
  seed,
  show,
  BOOKMARKS,
};
