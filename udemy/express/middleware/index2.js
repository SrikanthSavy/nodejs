//Handling basic-routes using middleWare


const express = require('express')
const app = express()

//Body-parser
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded()) // request-body parser

//Order is Important , "/"- route will handle all URLS - starting with "/"
// app.use('/',(req,res,next)=>{
//     console.group("This Middleware-will always Run!")
//    next()
// })



//middleware-2 
app.use('/add-product',(req,res,next)=>{
    console.log("This is from Middleware-2-Add a Product in Express!")
    res.send('<form action="/product" method="POST"> <input type="text" name="title"><button type="submit" >Submit</button>')
})

//middleware-2 
/*app.use('/product',(req,res,next)=>{ */ // THis will handle always execute , Even for GET/POST to restrict
app.post('/product',(req,res,next)=>{
    console.log("Inside /Product action call")
    console.log(req.body)
    res.redirect("/")
    //res.send('<h1>Add a Product in Express!</h1>')
})

//middleware 1
app.use('/',(req,res,next)=>{
    console.group("This is from Moddleware -1")
    res.send('<h1>Welcome to the world of Express!</h1>')
})



app.listen(3000)