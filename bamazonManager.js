var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Boomer1",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

function start() {



        inquirer
        .prompt({
            name: "options",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
            "View Products for Sale",
            "View Low Inventory",
            "Add to Inventory",
            "Add New Product"
            ]
        })
        .then(function(answer) {
            console.log(answer);
            switch (answer.options) {
            case "View Products for Sale":
            products();
            break;
    
            case "View Low Inventory":
            lowInventory();
            break;
    
            case "Add to Inventory":
            addInventory();
            break;
    
            case "Add New Product":
            addProduct();
            break;
            } 
        });
    
}

  
function products() {
    connection.query("SELECT * FROM products", function(error, results) {
        if (error) throw error;

    
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push({
                name: results[i].product_name + " - " + results[i].department_name + " - $" + results[i].price + " - " + results[i].stock_quantity + " Remaining",
                value: {
                  name: results[i].product_name,
                  department: results[i].department_name,
                  price: results[i].price,
                  quantity: results[i].stock_quantity
                }});
            }
            return choiceArray;


        
    });
}

function lowInventory() {
      
}

function addInventory() {
      
}

function addProduct() {
      
}