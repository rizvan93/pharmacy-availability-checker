const jwt = require("jsonwebtoken");
const AUTHENTICATE = true;

const isAuth = (authorized) => (req, res, next) => {
  if (!AUTHENTICATE) return next();

  const authorization = req.headers.authorization;
  console.log("authorization", authorization);
  const token = authorization.split(",")[1];
  console.log("token: ", token);

  const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
  if (authorized.includes(verifiedUser.accountType)) {
    next();
  } else {
    res.send(404).json({ message: "unauthorized" });
  }
};

const isUser = (req, res, next) => {
  if (!AUTHENTICATE) return next();

  const authorization = req.headers.authorization;
  const token = authorization.split(",")[1];
  const user = jwt.verify(token, process.env.JWT_SECRET);

  const { id } = req.params;

  if (id === user.accountId || !AUTHENTICATE) {
    next();
  } else {
    res.send(404).json({ message: "unauthorized" });
  }
};

module.exports = { isAuth, isUser };
