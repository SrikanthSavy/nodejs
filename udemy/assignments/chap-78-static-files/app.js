const express = require('express')
const path = require('path')
const app = express()

//app.use(express.static(path.join(__dirname),'public'))
//SERVING STATIC FILES CSS
app.use(express.static(path.join(__dirname,'public')))

const userRouter = require('./routes/users')

app.use(userRouter)
app.listen(3000, (error)=>{
    if(error)
        console.log("Error On Node sever Loading")
    else
        console.log('Server started on port 3000!')
})
