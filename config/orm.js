
var connection = require("../config/connection.js");

var orm = {
    all: function (tableInput, cb){
        var queryString = 'SELECT * FROM ' + tableInput + ';'
        connection.query(queryString, function(err,result){
            if (err){
                throw err;  
            }
            cb(result);
        });
    },
    insert: function (tableInput, burgerData, cb) {
        console.log(burgerData)
        var queryString = "INSERT INTO " + tableInput + "(burger_name, devoured) VALUES ("+ burgerData.burger_name +"," + burgerData.devour + ")"
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function (tableInput, cb) {
        var queryString = 'UPDATE' + tableInput + ';'
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm 
