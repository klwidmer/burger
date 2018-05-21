
var connection = require("../config/connection.js");

var orm = {
    all: function (tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";"
        connection.query(queryString, function(err,result){
            if (err){
                throw err;  
            }
            cb(result);
        });
    },
    insertOne: function (tableInput, cb) {
        var queryString = "INSERT INTO" + tableinput + ";"
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (tableInput, cb) {
        var queryString = "UPDATE" + tableinput + ";"
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm 
