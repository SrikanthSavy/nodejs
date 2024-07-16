const express = require('express')
const path  = require('path')  // core Node Js module - No NPM install path required
const rootDirecoty =require('../util/path') //  importing Helper function to get Root-Directory
const router = express.Router()

//middleware-2  //GET
router.get('/add-product', (req, res, next) => {
    console.log("This is from Middleware-2-Add a Product in Express!")
   // res.send('<form action="/admin/add-product" method="POST"> <input type="text" name="title"><button type="submit" >Submit</button>')
     res.sendFile(path.join(rootDirecoty,'views','add-product.html'))//Using Helper function to get Root-Directory
   //res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})

//middleware-2 //POST
/*app.use('/product',(req,res,next)=>{ */ // THis will handle always execute , Even for GET/POST to restrict
router.post('/add-product', (req, res, next) => {
    console.log("Inside /Product action call")
    console.log(req.body)
    res.redirect("/")
    //res.send('<h1>Add a Product in Express!</h1>')
})



module.exports = router


