const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "crudstudy",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { password } = req.body;

    let SQL = "INSERT INTO users ( name, password ) VALUES ( ?,?)";

    db.query(SQL, [name, password], (err, result) => {
        console.log(err)
    })
})

app.get("/details", (req, res) => {
    let SQL = "SELECT * from users";

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})

app.listen(3001, ()=>{
    console.log("Rodando servidor");
});

