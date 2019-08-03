var express    = require('express');
var app        = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(app.router);
app.use(express.static('public'));
app.set('view engine', 'ejs');


var connection = mysql.createConnection({


  host     : 'localhost',
  user     : 'root',
  password : 'urpasswd',
  database : 'nodedb'

});

//connection.connect();
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected !");
});





 app.get('/', function(req, res) {
 connection.query("SELECT * FROM names", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  res.render('home',{dropdownvals:result});

});
 
 });

//connection.end();

app.listen(3000, function () {
console.log('Raghus app listening on port 3000');
});
