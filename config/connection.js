// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");
var PORT = require("../server");
console.log(PORT)
// Set up our connection information
var connection = mysql.createConnection({
    host: "",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

// Connect to the database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
});

// Export connection
module.exports = connection;
