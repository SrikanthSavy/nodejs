const express = require('express')
const router = express.Router()
const path   = require('path') // Use this object to dynamically generate path of html file

const adminData = require('./admin')

//middleware 1
router.get('/', (req, res, next) => {
    //res.send('<h1>Welcome to the world of Express Router()!</h1>')
    //Adding html instead of hard coding 
    ///res.sendFile('../views/shop.html') //Will not work
    //console.log(`__dirname value : ${__dirname}`)
    console.log('From Shop.js "/" method',adminData.products) // products[] -- imported from admin.js -product[]
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
    //This willl __dirname= Current directory 
})

module.exports = router