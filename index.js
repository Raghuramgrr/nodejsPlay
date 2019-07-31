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


var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'root',
  password : 'urpasswd',
  database : 'nodedb'

});

//connection.connect();
connection.connect(function(err) {
  if (err) throw err;
  console.log("Fuck you!");
});


app.get('/', function (req, res) {

    res.sendFile(__dirname + '/index.html');

});


app.post('/data', function(req, res){

    var username=req.body.name;
    console.log(username)
    var sql = "INSERT INTO `names`(`names`) VALUES ('"+req.body.name+"')";

    connection.query(sql , function(err, result){
        if(err) throw err;
        console.log("Fuck you again");
    });

    res.send(username);

});

//connection.end();

app.listen(3000, function () {
console.log('Raghus app listening on port 3000');
});
