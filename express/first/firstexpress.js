const express = require('express')
const app= express()

app.listen(8000, (err)=>{
    if(err)
        console.error(`Error on the server :${err}`)
    console.log("Server is running on Port : 8000")
})

app.get("/",(req,res)=>{
    console.log("default get()")
    res.send("Welcome to Default Page!")
})

app.get("/test",(req,res)=>{
    console.log("From test Page")
    res.send("Welcome to Test Page!")
})


