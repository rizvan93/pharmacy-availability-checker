const jwt = require("jsonwebtoken");
const AUTHENTICATE = false;

const isAuth = (authorized) => (req, res, next) => {
  if (!AUTHENTICATE) return next();

  const authorization = req.headers.authorization;
  console.log("authorization", authorization);
  const token = authorization.split(",")[1];
  console.log("token: ", token);

  const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
  if (
    authorized.includes(verifiedUser.accountType) ||
    authorized.includes("*")
  ) {
    req.headers.authorization = { user: verifiedUser };
    next();
  } else {
    res.send(404).json({ message: "unauthorized" });
  }
};

const isUser = (req, res, next) => {
  if (!AUTHENTICATE) return next();

  const { user } = req.headers.authorization;
  const { id } = req.params;

  if (id === user.accountId || !AUTHENTICATE) {
    next();
  } else {
    res.send(404).json({ message: "unauthorized" });
  }
};

module.exports = { isAuth, isUser };
