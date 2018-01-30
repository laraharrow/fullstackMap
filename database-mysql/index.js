var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'programs'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM clients UNION SELECT * FROM servers UNION SELECT * FROM dbs', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var save = function(table, frameWork, callback) {
  connection.query(`INSERT INTO ${table}(name, url, mesa) VALUES('${frameWork}', 'https://www.google.com/search?q=${frameWork}DOCS', '${table}')`, function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}


module.exports.selectAll = selectAll;
module.exports.save = save;


// https://www.google.com/search?q=

// id int NOT NULL AUTO_INCREMENT,
//   name varchar(50) NOT NULL,
//   url varchar(50) NOT NULL,
//   PRIMARY KEY (ID)