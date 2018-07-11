require("dotenv").config();

// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");

// Initialize express APP
const server = express();

// PORT for our server
const PORT = 7000;
const VERSION = process.env.APP_VERSION;

// Connect to our DB
require("./db/db.config");

// Express middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Connect to routes
server.use(`/api/v${VERSION}/guest`, require("./controllers/guest.controller"));

server.use(
  `/api/v${VERSION}/ticket`,
  require("./controllers/ticket.controller")
);

// Serving the server on a PORT and logging response
// once connections is established
server.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
  console.log(`APP VERSION: ${VERSION}`);
});
