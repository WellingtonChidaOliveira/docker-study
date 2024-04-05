const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const config = {
  host: "mysql",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");
const conn = mysql.createConnection(config);
conn.query(
  "CREATE TABLE IF NOT EXISTS people(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))"
);

app.get("/", (req, res) => {
  const query = `INSERT INTO people(name) VALUES('Chida')`;
  conn.query(query);

  conn.query("SELECT * FROM people", (err, rows) => {
    if (err) {
      console.log(err);
      return res.send("Error");
    }

    const names = rows.map((row) => row.name).join(", ");
    res.send(`<h1>Full Cycle Rocks! ${names}</h1>`);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
