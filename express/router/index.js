const express = require('express')
const app = express()

const router = require('./routes/requestmapping')

//use() to invoke the routes

app.use("/request",router)





app.listen(3000, (error)=>{
    if(error)
        console.log("Error while starting the server!")
    else
        console.log('Node Server Started on Port 3000!')
})