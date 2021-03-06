const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Ticket",
  new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    issue: { type: String },
    folio: { type: String },
    ticket: { type: String, unique: true },
    active: { type: String, default: true },
    loyalty: { type: String },
    photo: {
      type: String,
      default:
        "https://projects.scpr.org/static-files/_v4/images/default_avatar.png"
    }
  })
);
