const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Ticket",
  new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    issue: { type: String },
    folio: { type: String, unique: true },
    ticket: { type: String }
  })
);
