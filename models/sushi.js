let orm = require("../config/orm.js");

let sushi = {
    all: function(cb) {
        orm.all("sushi", function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.create("sushi", [
            "sushi_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    update: function(id, cb) {
        let condition = "id=" + id;
        orm.update("sushi", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = sushi;