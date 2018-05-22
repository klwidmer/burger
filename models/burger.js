

var orm = require ("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    insert: function(data, cb){
        orm.insert("burgers", data, function(res){
        cb(res);
        })
    },
    update: function(cb){
        orm.update("burgers", function(res){
        cb(res);
        });
    }
}
module.exports = burger;
