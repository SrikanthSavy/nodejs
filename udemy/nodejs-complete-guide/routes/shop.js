const express = require('express')
const router = express.Router()
const path   = require('path') // Use this object to dynamically generate path of html file
//c
const adminData = require('./admin') // To fecth User-added content from /add-product page

//middleware 1
router.get('/', (req, res, next) => {
    
    console.log(`__dirname value : ${__dirname}`)
    console.log('Shops. Js , getting products[]',adminData.products)
    //instead rendering from "TEMPLATE ENGINE PUG" res.render('pug files to load')
    //res.render('shop')
    const productsArray = adminData.products  // Fetching data from Add-product - user entered
    res.render('shop',{products:productsArray, pageTitle:'Shop Page',path:'/'}) // shop.pug file name && content you want to send 
    //Official Pug page: https://pugjs.org/api/getting-started.html
})

module.exports = router