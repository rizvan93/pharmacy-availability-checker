const jwt = require("jsonwebtoken");
const AUTHENTICATE = true;

const isAuth = (authorized) => (req, res, next) => {
  if (!AUTHENTICATE) return next();

  try {
    const authorization = req.headers.authorization;
    const token = authorization.split(",")[1];

    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
    if (authorized.includes(verifiedUser.accountType)) {
      req.headers.authorization = verifiedUser;
      next();
    } else {
      res.status(404).json({ message: "unauthorized" });
    }
  } catch (error) {
    res.status(404).json({ message: "unauthorized" });
  }
};

const isUser = (req, res, next) => {
  if (!AUTHENTICATE) return next();

  const user = req.headers.authorization;
  const { id } = req.params;

  if (id === user.accountId || !AUTHENTICATE) {
    next();
  } else {
    res.status(404).json({ message: "unauthorized" });
  }
};

module.exports = { isAuth, isUser };
