var mysql = require("mysql");
var inquirer = require("inquirer");
// inquirer.registerPrompt("table", require("./index"));

var conection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "AryaRhea1985",
    database: "bamazonDB"
});

conection.connect(function(err) {
    if (err) throw err;
    start(); 
});

function start() {
    inquirer.prompt({
        name: "options",
        type: "rawList",
        message: "Welcome! What would you like to do?",
        choices: [
            "View Product Sales By Department", 
            "Create New Department"
        ]
    }).then(function(answer) {
        switch (answer.options) {
            case "View Products Sales By Department":
                salesByDepartment();
                break;

            case "Create New Department":
                newDepartment();
                break;

            default:
                start();
                break;
        }
    });
};

function salesByDepartment() {
    console.log("Boobies");
};


function newDepartment() {
    console.log("Pussy");
};