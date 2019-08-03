var express    = require('express');
var app        = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

 app.get('/', function(req, res) {
  con.query("SELECT * FROM CITY", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  res.render('/index1.html',{dropdownvals:result});

});
 
 });

 app.listen(3000, function () {
console.log('listening on port 3000');
});   