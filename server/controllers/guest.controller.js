const express = require("express");

// import Guest DB from models
const Guest = require("../models/guest.model");

const guest = express.Router();

guest.get("/", (req, res) => {
  console.log("here");
});

guest.post("/", (req, res) => {
  const { firstName, lastName, folio, room } = req.query;

  Guest.create({
    firstName: firstName,
    lastName: lastName,
    folio: folio,
    room: room
  })
    .then(guest => {
      res.send({ success: true, message: "Guest created", guest: guest });
    })
    .catch(e => res.send(e.message));
});

module.exports = guest;
