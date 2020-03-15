const mongoose = require("mongoose")
const Schema = mongoose.Schema


const SchemaLayout = new Schema({

    title: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    product: {
        type: String,
        require: true
    }

})









module.exports = mongoose.model("newDataMongoose", SchemaLayout)