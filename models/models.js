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
    save() {
        this.id = uniqid()
        // productMemo.push(this)

        const db = getDb()
        return db.collection("data").insertOne(this)

        // .then(result => console.log(result.result))

        // .catch(err => { throw new Error("is not working ") })

        // const db = getDB()
        // db.collection("data")
        //     .insertOne(this)
        //     .then((result) => {
        //         console.log(result.result)
        //     })
        //     .catch(err => {
        //         throw new Error("its not working ")
        //     })



    }


    static memory() {
        const db = getDb()
        return db.collection("data")
    }

    updateProduct() {
        const db = getDb()
        return db.collection("data").updateOne({ _id: new objectid(this.id) },
            {
                $set: {
                    id: this.id,
                    title: this.title,
                    product: this.product,
                    price: this.price
                }
            }
        )

        // const findProductIndex = productMemo.findIndex(p => p.id == this.id)
        // productMemo[findProductIndex] = this;
        // console.log(productMemo);

    }


    static deleteId(productId) {
        const db = getDb()
        return db.collection("data").deleteOne({ _id: new objectid(productId) })
        // productMemo = productMemo.filter(i => i.id != productId)
    }

    static findbyId(productId) {

        const db = getDb()
        return db.collection("data").findOne({ _id: new objectid(productId) })
        // console.log(productId)
        // return productMemo.filter(f => f.id == productId)
    }


}

module.exports = Products