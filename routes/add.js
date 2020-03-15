const express = require("express")
const path = require("path")


const route = express.Router()

const addViewcontrol = require("../controllers/add")
const apostProducts = require("../controllers/product")




route.get("/add", apostProducts.getProduct)

route.post("/add", addViewcontrol.addview)

route.post("/", apostProducts.postProduct)

route.post("/edit", apostProducts.postEditproduct)

route.post("/delete", apostProducts.postDeleteProduct)

route.post("/cart/:productId", apostProducts.postcartDisplay)

route.get("/cart", apostProducts.getcartDisplay)


// route.get("/delete", apostProducts.deleteProduct)

route.get("/edit/:productId", apostProducts.editProduct)

route.get("/viewdetail/:productId", apostProducts.viewDetailProduct)






module.exports = route