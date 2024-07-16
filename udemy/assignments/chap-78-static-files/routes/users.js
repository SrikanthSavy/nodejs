const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/users',(req,res,next)=>{
    res.status(200)
    res.sendFile(path.join(__dirname,'../','views','users.html'))
})

router.get('/',(req,res,next)=>{
    res.status(200)
    res.sendFile(path.join(__dirname,'../','views','add-user.html'))
})

router.post('/',(req,res,next)=>{
    res.status(200)
    res.sendFile(path.join(__dirname,'../','views','users.html'))
})

module.exports=router