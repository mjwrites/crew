const express = require("express");

// import Guest DB from models
const Guest = require("../models/guest.model");

const guest = express.Router();

guest.get("/", (req, res) => {
  console.log("here");
});

/**
 * Example request
 * http://localhost:7000/api/v1/guest?firstName=John&lastName=Doe&folio=4321&room=123
 */

guest.post("/", (req, res) => {
  const { firstName, lastName, folio, room, loyalty } = req.query;
  
  Guest.create({
  firstName: firstName,
  lastName: lastName,
  folio: folio,
  room: room,
  loyalty: loyalty
  })
  .then(guest => {
  res.send(JSON.stringify({ success: true, message: "Guest created"}));
  })
  .catch(e => res.send(e.message));
  }); 

module.exports = guest;
