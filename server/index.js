const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"martina_project"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("connnection")
  });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/getAllSenzor/', (req, res) => {
    con.query("SELECT * FROM senzori", function (err, result) {
      console.log(result);
      res.send(result)
     });
})

app.post ('/brisatiSenzor/', (req, res) => {
  const ID=req.body.id;
  console.log(ID);
  var sql = "DELETE FROM senzori where id=?";
  con.query(sql, [ID],function (err, result) {
    if (err) throw err;
    console.log("izbrisan");
  });
})

app.post('/dodati/', (req, res) => {
  const temp=req.body.temp
  const vlaznost =req.body.vlaznost
  const tlak =req.body.tlak


  console.log(req.body)
  var sql = "INSERT INTO senzori (temp,vlaznost,tlak) VALUES (?,?,?);";

  con.query(sql,[temp,vlaznost,tlak], function (err, result) {
    if (err) throw err;

    console.log("dodali smo ");

   });
})


app.get('/api/', (req, res) => {
   con.query("SELECT * FROM users", function (err, result) {
     console.log(result);
     res.send(result)
    });
  })


app.post('/user/', (req, res) => {
    const ID =req.body.id
    console.log(req.body)
    con.query("SELECT * FROM users WHERE id=?", [ID], function (err, result) {

       console.log(result);
       res.send(result);

     });
})

app.get('/getAllUsers/', (req, res) => {

  console.log("Getting all users");
  con.query("SELECT * FROM users", function (err, result) {
    console.log(result);
    res.send(result)
   });
 })



app.post('/user1/', (req, res) => {
  const ime1=req.body.firstName
  const prezime1 =req.body.lastName
  const pass1 =req.body.pass
  const mail1 =req.body.mail
  const role1 =req.body.role

  console.log(req.body)
  var sql = "INSERT INTO users (FirstName,LastName,mail,pass,role) VALUES (?,?,?,?,?);";

  con.query(sql,[ime1,prezime1,pass1, mail1,role1], function (err, result) {
    if (err) throw err;

    console.log("dodali smo ");

   });
})

app.post ('/brisi/', (req, res) => {
  const ID=req.body.id;
  console.log(ID);
  var sql = "DELETE FROM users where id=?";
  con.query(sql, [ID],function (err, result) {
    if (err) throw err;
    console.log("izbrisan");
  });
})

app.post ('/brisati/', (req, res) => {
  const ID=req.body.id;
  console.log(ID);

  var sql = "DELETE FROM users where id=?";
  con.query(sql, [ID],function (err, result) {
    if (err) throw err;
    console.log("izbrisan");

  });
})


app.get('/dod/', (req, res) => {
    console.log("Connected!");
    var sql = "INSERT INTO users (firstName,LastName,Mail,role) VALUES ('Josko','Lozina','josko@gmail.com',2)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
})

app.listen(3004, () => {
  console.log(`Example app`)
})

app.get('/nov/', (req, res) => {
  con.query("SELECT * FROM users WHERE id=1", function (err, result) {
    console.log(result);
    res.send(result)
  });
})

app.get('/mj/', (req, res) => {
  console.log("Connected!");
  con.query("Update  users SET  pass='eeeeeee' WHERE id=1;", function (err, result) {
    console.log(result);
    res.send(result);
  });
})
