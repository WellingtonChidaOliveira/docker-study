const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const config = {
  host: "db",
  user: "guest",
  password: "guest",
  database: "nodedb",
};

const mysql = require("mysql");
const connection = mysql.createConnection(config);

const sql = `CREATE TABLE IF NOT EXISTS people (id int NOT NULL AUTO_INCREMENT, name varchar(255), PRIMARY KEY (id))`;
const insert = `INSERT INTO people(name) values('John Doe')`;
connection.query(sql);
connection.query(insert);
connection.end();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
