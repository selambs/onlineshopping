const express = require("express")
const path = require("path")

const rout = express.Router()
const mainViewcontrol = require("../controllers/main")


rout.get('/', mainViewcontrol.mainview)

// rout.post('/', mainViewcontrol.postProduct)




module.exports = rout