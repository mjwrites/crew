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

// http://localhost:7000/api/v1/ticket?ticketNumber=123&issue=MY ISSUE&folio=321
ticket.post("/", async (req, res) => {
  const { ticketNumber, issue, folio } = req.query;

  // Call GUEST DB to retrieve INFO using "folio"
  // If found extract info and create TICKET
  // Else return error

  try {
    const guest = await Guest.findOne({ folio: folio });

    // Check if valid guest
    if (guest) {
      // Extract from guest response above
      const { firstName, lastName, photo } = guest;
      // Store Info in ticket
      await Ticket.create({
        firstName: firstName,
        lastName: lastName,
        issue: issue,
        folio: folio,
        ticket: ticketNumber,
        photo: photo
      });

      res.send({ success: true, guest: guest });
    } else {
      res.send({
        success: false,
        message: `Unable to find gues based on the folio #${folio} provided`
      });
    }
  } catch (e) {
    res.send({ success: false, message: e.message });
  }
});

module.exports = ticket;
