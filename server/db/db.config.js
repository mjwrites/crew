require("dotenv").config();
// ORM for MongoDB
// ORM - Object relational model
// Gives schema to our Schemeless DB (Like SQL)
const mongoose = require("mongoose");

// Establish connection to DB
mongoose
  .connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongo client connected gracefully."))
  .catch(e => console.log(`DB Connection: ERROR\n\t${e.message}`));
