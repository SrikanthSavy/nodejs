const http = require('http')
const express = require('express')

const app = express()

//middleware 1
app.use((req,res,next)=>{
    console.group("This is from Moddleware -1")
    next()// this is send the control to next- middleware 2 
})

//middleware-2 
app.use((req,res,next)=>{
    console.log("This is from Middleware-2")
    res.send('<h1>Welcome to the world of Express!</h1>')
})

app.listen(3000)  // This one line will do all this :http.createServer(app)
//You can refer gitHub of express here: https://github.com/expressjs/express/tree/master/lib  at application.js
//send()  -- refer response.js

//Insted of below code
/*
    const server = http.createServer(app)
    server.listen(3000, (error)=>{
    if(error)
        console.log("Error on Startup")
    else
        console.log("Server started on Port 3000")

})*/