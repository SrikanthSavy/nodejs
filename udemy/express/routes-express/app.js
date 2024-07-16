//Handling basic-routes using middleWare

const express = require('express')
const app = express()

//Body-parser
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded()) // request-body parser


//middleware 1
app.use('/',(req,res,next)=>{
    console.group("This is from Moddleware -1")
    res.send('<h1>Welcome to the world of Express Routes!</h1>')
})



app.listen(3000)