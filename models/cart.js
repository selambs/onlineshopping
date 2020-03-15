

const getDb = require("../util/database").getdb
const objectid = require("mongodb").ObjectId

let productMemo = []

const uniqid = require('uniqid')

class Products {

    constructor(id, title, product, price) {
        this.id = id,
            this.title = title,
            this.product = product,
            this.price = price
    }

    addTocart() {
        const db = getDb()
        return db.collection("cartData").insertOne(this)
    }

    static getCart() {
        const db = getDb()
        return db.collection("cartData")
    }

}

module.exports = Products