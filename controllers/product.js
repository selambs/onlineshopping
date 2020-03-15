const express = require("express")
const bodyparser = require('body-parser')
const Product = require("../models/models")
const CartStoge = require("../models/cart")

const ProductMongoose = require("../models/dataMongoose")



exports.postProduct = (req, res, next) => {
    let title = req.body.title
    let product = req.body.product
    let price = req.body.price
    let prod = new Product(null, title, product, price)
    /**using Mongo drive */
    // prod.save()
    //     .then(result => {
    //         console.log(result)

    //         res.redirect("/")
    //     })
    //     .catch(err => console.log(err))

    // console.log(title, product, price);

    /**using Mongoose*/

    new ProductMongoose({

        title: title,
        price: price,
        product: product,

    }).save()
        .then((result) => {
            console.log(result + "from mongoose ");
            res.redirect("/")
        })
        .catch(err => console.log(err))
}



exports.getProduct = (req, res, next) => {

    /**using Mongo drive */

    // const all = Product.memory()

    // all.find()
    //     .toArray()
    //     .then(result => {
    //         console.log(result);

    //         res.render('addproduct', { 'prods': result });
    //     })
    //     .catch(err => console.log(err))

    /**using Mongoose */
    ProductMongoose.find()
        .then((r) => {
            console.log(r)
            res.render('addproduct', { 'prods': r })

        }).catch(err => console.log(err))



}


exports.deleteProduct = (req, res, next) => {
    res.render("delete")
}

exports.editProduct = (req, res, next) => {

    /**using Mongo drive */

    const prodId = req.params.productId
    console.log(prodId)
    // const filterresultProducts = Product.findbyId(prodId)

    // filterresultProducts
    //     .then(result => {
    //         res.render("edit", { prod: result })
    //     })
    //     .catch(err => console.log(err))




    /**using Mongoose */
    ProductMongoose.findById(prodId)
        .then((r) => {
            res.render("edit", { prod: r })
        })
        .catch(err => console.log(err))
}

exports.postEditproduct = (req, res, next) => {
    /**using Mongo drive */
    const body = req.body
    // const newEditProduct = new Product(body.id, body.title, body.product, body.price)

    // newEditProduct.updateProduct()
    //     .then(result => {
    //         console.log(result);
    //         res.redirect("/add")
    //     })
    //     .catch(err => { throw new Error("err from update ") })
    /**using Mongoose */

    console.log(body.id);

    ProductMongoose.updateOne({
        _id: body.id,
        title: req.body.title,
        price: req.body.price,
        product: req.body.product,
    }).then((r) => {
        console.log("from Post functiob" + r);
        res.redirect("/")

    }).catch(err => { throw new Error("err from update ") })

}


exports.postDeleteProduct = (req, res, next) => {
    /**using Mongo drive */
    console.log(req.body.id);

    let prod = req.body.id
    // Product.deleteId(prod)
    //     .then(result => {
    //         console.log(result);

    //         res.render("delete")
    //     })
    //     .catch(err => console.log(err))

    /**using Mongoose */

    ProductMongoose.deleteOne({ _id: prod })
        .then(r => {
            console.log(r)
            res.render("delete")
        }).catch(err => console.log(err))

}

exports.viewDetailProduct = (req, res, next) => {

    /**using Mongo drive */
    // const filterResultProducts = Product.findbyId(req.params.productId)

    // filterResultProducts.then(result => {
    //     console.log(result);

    //     res.render("viewdetail", { product: result })
    // }
    // ).catch(err => console.log(err))

    /**using Mongoose */
    ProductMongoose.findById(req.params.productId)
        .then(result => {
            console.log(result);

            res.render("viewdetail", { product: result })
        }).catch(err => console.log(err))



}




/**from the cart function  */


exports.postcartDisplay = (req, res, next) => {
    const body = req.body
    const tocart = new CartStoge(body.id, body.title, body.product, body.price)
    tocart.addTocart()
        .then((result) => {
            console.log(result)
            res.render("cart")
        }).catch(err => {
            throw new Error("add to cart function it is not working ")
        })

}


exports.getcartDisplay = (req, res, next) => {
    CartStoge.getCart()
        .find()
        .toArray()
        .then((result) => {
            console.log(result);
            res.render("cart", { product: result })
        })
        .catch((err) => {
            console.log(err)
        })

}

