const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Guest",
  new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    room: { type: String },
    folio: { type: String, unique: true },
    photo: {
      type: String,
      default:
        "https://projects.scpr.org/static-files/_v4/images/default_avatar.png"
    }
  })
);
