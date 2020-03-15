const express = require("express")
const path = require("path")
const Product = require("../models/models")


exports.mainview = (req, res, next) => {
    // res.sendFile(path.join(__dirname, "views", "index.html"))
    res.render("index")
}

// exports.postProduct = (req, res, next) => {
//     let title = req.body.title
//     let product = req.body.product
//     let price = req.body.price
//     let prod = new Product(title, product, price)
//     prod.save()
//     console.log(title);

//     res.redirect("/")

// }
// exports.getProduct = (req, res, next) => {
//     const all = Product.memory()
//     console.log(all)

// }