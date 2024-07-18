const express = require('express')
const path  = require('path')  // core Node Js module - No NPM install path required
const rootDirecoty =require('../util/path') //  importing Helper function to get Root-Directory
const router = express.Router()
const products=[] // Global Array to hold what User had added /add-product

//middleware-2  //GET
router.get('/add-product', (req, res, next) => {
    //res.sendFile(path.join(rootDirecoty,'views','add-product.html'))//Using Helper function to get Root-Directory
    //We will render it from Template engine pug
    res.render('add-product',{pageTitle:'Add Product',path:'addProductPath'})
})

//middleware-2 //POST
/*app.use('/product',(req,res,next)=>{ */ // THis will handle always execute , Even for GET/POST to restrict
router.post('/add-product', (req, res, next) => {
    console.log("Inside /Product action call")
    //Push User entered data to Products[]
    products.push({'title':req.body.title})

    res.redirect("/")
    //res.send('<h1>Add a Product in Express!</h1>')
})



module.exports.router = router
module.exports.products = products 

