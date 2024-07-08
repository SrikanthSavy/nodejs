//Importing the Express package
const express= require('express')
//reating an Express object
const app= express()

app.get('/',(req,res)=>{
    res.send("Welcome to GET-Method call on express")

})

app.post("/getPost",(req,res)=>{
    res.send("POST method request is invoke on this express app!")
})

app.put("/getPut",(req,res)=>{
    res.send("PUT method request is invoke on this express app!")
})

app.patch("/getPatch",(req,res)=>{
    res.send("PATCH method request is invoke on this express app!")
})

app.delete("/getDelete",(req,res)=>{
    res.send("DELETE method request is invoke on this express app!")
})


app.listen(8000,(err)=>{
    if(err)
        console.log("Error while loading server 8000")
    else
        console.log("Server started on port 8000")
})