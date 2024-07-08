//Importing Express package
const express = require('express')

//Creating express object
const app = express()

app.get('/default', (req,res) =>{
    //we use res.send() instead of res.write()
    //Will convert the JSObject to String
    res.send("Welcome to Express Page")

}).listen(8000,(err)=>{
    if(err)
        console.log("Error while loading server 8000")
    else
        console.log("Server started on port 8000")
})
