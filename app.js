const express = require("express")
const path = require("path")
const bodyparser = require('body-parser')
const uniqid = require('uniqid')
const mongodb = require("mongodb")
const mongoose = require("mongoose")



const mongoConnect = require("./util/database").mongoConnect

// const mongoConnect = require("./util/database").mongoConnect



const addRout = require("./routes/add")
const mainRout = require("./routes/main")

const app = express()

app.set("view engine", 'ejs')

app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "public")))

app.use(addRout)
app.use(mainRout)

mongoose.connect("mongodb://localhost:27017", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {

        app.listen(5000, () => {
            console.log("serveer is working on 5000");

        })

    })

// mongoConnect(() => {

//     app.listen(5000, () => {
//         console.log("serveer is working on 5000");

//     })

// })


