const Mongoclient = require("mongodb").MongoClient
let _db;


/**
 * exports.mongoConnect = function (callback) {
    Mongoclient.connect(q, { useUnifiedTopology: true })

        .then((client) => {
            _db = client.db("Project")
            callback()
        })
        .catch(err => console.log(err))
}

exports.getdb = function () {
    if (_db) {
        return _db
    } else {
        throw new Error("_db is not working ")
    }
}
**/

exports.mongoConnect = function (callback) {

    Mongoclient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })

        .then((client) => {
            _db = client.db("Project")
            callback()
        })
        .catch(err => {

            console.log(err)
        })

}


exports.getdb = function () {

    if (_db) {
        return _db
    } else {
        throw new Error("its not working ")
    }
}




