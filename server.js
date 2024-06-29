const app = require("./app");
const PORT = process.env.PORT || 8000;

//* START SERVER
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
