require("dotenv").config();
const PORT = process.env.PORT || 8000;
const app = require("./app");

//* START SERVER
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
