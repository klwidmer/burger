

var orm = require ("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    }
    // update: function(cb){
    //     orm.update()
    // }
}

module.exports = burger;
