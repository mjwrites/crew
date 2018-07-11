var express = require("express"); // Web Framework
var app = express();
var sql = require("mssql"); // MS Sql Server client

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);    

// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql");

// const app = express();
// const SELECT_ALL_GUESTS = "SELECT * from guests";
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "admin",
//   password: "admin",
//   database: "CBIC_DQ"
// });

// connection.connect(err => {
//   if (err) {
//     return err;
//   }
// });

// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("its doin something");
// });

// app.get("/guests", (req, res) => {
//   connection.query(SELECT_ALL_GUESTS, (err, results) => {
//     if (err) {
//       return res.send(err);
//     } else {
//       return res.json({
//         data: results
//       });
//     }
//   });
// });

// app.listen(1521, () => {
//   console.log("Listening on port 1521");
// });
