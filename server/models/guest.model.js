const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Guest",
  new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    room: { type: String },
    folio: { type: String, unique: true }
  })
);
