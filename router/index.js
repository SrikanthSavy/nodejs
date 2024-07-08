const express = require('express')
const app = express()

const router = require('./routes/requestmapping')

//use() to invoke the routes

//Defining midlle ware for all requests
app.use((req,res,next)=>{
    console.log(`A New for (*) Request was recieved at ${Date.now()}`)
    next()  
})


//Defining a middleware only on "/request path"
app.use('/request', (req,res,next)=>{
    console.log(`A New Request was recieved at ${Date.now()}`)
    next()  

})


app.use("/request",router)





app.listen(3000, (error)=>{
    if(error)
        console.log("Error while starting the server!")
    else
        console.log('Node Server Started on Port 3000!')
})