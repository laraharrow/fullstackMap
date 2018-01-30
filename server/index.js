var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql/index.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/items', function(req, res) {
	console.log('post req body: ',req.body);
	db.save(req.body.table, req.body.frameWork, function(err, val) {
		console.log('data was saved in db: ', err, val);
	})
	res.send();
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

//post req body:  { table: 'clients', frameWork: 'React' }












