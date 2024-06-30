const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const app = require("./app");

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("DB Connection"))
  .catch((err) => console.log(err));

//* START SERVER
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
