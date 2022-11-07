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
        if (err) {
            res.send(err);
        }
        if(result){
            res.send({msg:"cadastrado"});
        }
    })
})

app.post("/login", (req, res) => {
    const { name } = req.body;
    const { password } = req.body;

    let SQL= "SELECT * FROM users WHERE name = ? AND password = ?"

    db.query(SQL, [name, password], (err, result) => {
        if (err) {
            res.send(err);
        }
        if(result.length > 0){
            res.send({msg:"Usuario logado com sucesso"});
        } else {
            res.send({msg:"Usuario Nao encontrado"});
        }
    });
});


app.post("/details", (req, res) => {
    const { name } = req.body;
    const { password } = req.body;

    let SQL = "SELECT * FROM crudstudy.users Where name = ? AND password = ?";
    
    db.query(SQL, [name, password], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})

app.listen(3001, ()=>{
    console.log("Rodando servidor");
});

