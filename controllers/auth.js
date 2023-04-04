const jwt = require("jsonwebtoken");

const isAuth = (authorized) => (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log(authorization);
  const token = authorization.split(",")[1];
  console.log("token: ", token);

  const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
  if (authorized.includes(verifiedUser.accountType)) {
    next();
  } else {
    res.send(404).json({ message: "unauthorized" });
  }
};

module.exports = isAuth;
