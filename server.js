const express = require("express");
const path = require("path");
const logger = require("morgan");
require("dotenv").config();
require("./config/database");

const usersRouter = require("./routes/usersRouter"); //-> Adelyn
const pharmacistsRouter = require("./routes/pharmacistsRouter"); // -> Irvin
const consumersRouter = require("./routes/consumersRouter"); // -> Irvin
const storesRouter = require("./routes/storesRouter");
const medicinesRouter = require("./routes/medicinesRouter");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

app.use("/api/users", usersRouter);
app.use("/api/pharmacists", pharmacistsRouter);
app.use("/api/consumers", consumersRouter);
app.use("/api/stores", storesRouter);
app.use("/api/medicines", medicinesRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});
