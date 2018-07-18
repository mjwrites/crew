const express = require("express");

// Import Ticket & GUEST DB schema
const Ticket = require("../models/ticket.model");
const Guest = require("../models/guest.model");

const ticket = express.Router();

// http://localhost:8080/api/v1/ticket?ticket="123"
// http://api.carnival.com:8080/api/v1/ticket
ticket.get("/", (req, res) => {
  //extract number from request
  const { ticketNumber } = req.query;
  //get ticket from db
  Ticket.findOne({ ticketNumber: ticketNumber })
    .then(ticket => res.send({ ticket: ticket }))
    .catch(e => console.log(e.message));
});

// Get all tickets from DB
// http://localhost:7000/api/v1/ticket/all
ticket.get("/all", (req, res) => {
  Ticket.find({})
    .then(tickets => res.send({ success: true, tickets: tickets }))
    .catch(e => res.send({ success: false, message: e.message }));
});

// http://localhost:8080/api/v1/ticket?ticketNumber=123&issue="MY ISSUE"&folio="321"
ticket.post("/", (req, res) => {
  const { ticketNumber, issue, folio } = req.query;

  // Call GUEST DB to retrieve INFO using "folio"
  // If found extract info and create TICKET
  // Else return error
  Guest.findOne({ folio: folio })
    .then(guest => {
      if (guest.length <= 0) {
        res.send({ success: false, message: `Folio ${folio} not found` });
      } else {
        // extract guest INFO
        const { firstName, lastName } = guest;
        // Store Info in ticket
        Ticket.create({
          firstName: firstName,
          lastName: lastName,
          issue: issue,
          folio: folio,
          ticket: ticketNumber
        })
          .then(guest => res.send(guest))
          .catch(e => res.send(e.message));
      }
      console.log(guest);
    })
    .catch(e => res.send({ success: false, message: e.message }));
});

module.exports = ticket;
