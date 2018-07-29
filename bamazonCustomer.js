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
    connection.query("SELECT * FROM products", function(error, results) {
      if (error) throw error;
      inquirer.prompt([

          {
            name: "choice",
            type: "rawlist",
            choices: function() {
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
            },
            message: "\n===================================================================\nPlease enter the Number of the product you would like to buy?\n==================================================================="
          },


          {
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?"
          }

        ]).then(function(answer) {

          var chosenItem;
          for (var i = 0; i < results.length; i++) {
            if (results[i].stock_quantity >= answer.quantity) {
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: answer.choice.quantity - answer.quantity
                },
                {
                  product_name: answer.choice.name
                }
              ],
              function(error) {
                if (error) throw err;
                console.log("===================================================================\nOrder quatity available! \nOrder Total: $" + answer.quantity * answer.choice.price);
                start();
              }
            );
            break;
          }
          else {
            console.log("Insufficent quantity. Please choose again.");
            start();
          }
        }

        })
    })
}






