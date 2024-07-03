const mongoose = require("mongoose");
require("dotenv").config();

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const PORT = process.env.PORT || 8000;
const app = require("./app");

// mongoose
//   .connect(process.env.MONGODB)
//   .then(() => console.log("DB Connection"))
//   .catch((err) => console.log(err));

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

//* START SERVER
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.mes);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
