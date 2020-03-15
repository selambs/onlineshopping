
const express = require("express")
const path = require("path")

exports.addview = (req, res, next)=> {

    res.render("addproduct")
}