
var connection = require("../config/connection.js");


var selectAll = {
    all: function (tableinput, cb){
        var queryString = "SELECT * FROM " + tableinput + ";"
        connection.query(queryString, function(err,result){
            if (err){
                throw err;  
            }
            cb(result);
        });
    },
}

var insertOne = {
    insertOne: function (tableinput,cb){
        var queryString = "INSERT INTO" + tableinput + ";"
        connection.query(queryString, function (err,result){
            if (err){
            throw err;
            }
            cb(resutl);
        });
    },
}
var updateOne = {
    updateOne: function (tableinput,cb){
        var queryString = "UPDATE" + tableinput + ";"
        connection.query(queryString, function (err,result){
            if (err){
            throw err;
            }
            cb(resutl);
        });
    }
}




module.exports = 