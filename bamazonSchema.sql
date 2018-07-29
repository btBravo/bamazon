DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike Air Jordan Basketball Shoes", "Sporting Goods", 120.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("LCD Flat-Screen HDTV", "Electronics", 1299.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Levi's Denim Jeans", "Apparel", 45.50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Acer Laptop Computer", "Electronics", 899.99, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("18 inch Chrome Wheels", "Automotive", 1000.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Whole Shabang Potato Chip Variety Pack", "Food", 32.95, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Eminem -  The Marshall Mathers LP - Vinyl Record", "Music", 22.50, 313);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("5 Piece Bed Set", "Home Goods", 60.00, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lifeproof iPhone Case", "Electronics", 89.95, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Oakley Sunglasses", "Apparel", 122.65, 77);


