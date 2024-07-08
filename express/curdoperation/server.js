const express= require('express')

//importing our control
const userControl= require('./user.cntrl.js')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("Welcome tto Node JS Express app!!")
    res.status(200)
})


app.get('/users',userControl.getUsers)
app.get('/user/:userId',userControl.getUser)
app.delete('/user/:userId',userControl.deleteUser)
app.post('/users',userControl.addUser)
app.patch('/user/:userId',userControl.updateUser)

app.listen(3000,(err)=>{
    if(err)
        console.log("Error while starting Node")
    else
        console.log("Server Started on port 3000!!!!")
})