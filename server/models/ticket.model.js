const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Ticket",
  new mongoose.Schema({
    guest: { type: Object },
    issue: { type: String },
    folio: { type: String, unique: true },
    ticket: { type: String }
  })
);
