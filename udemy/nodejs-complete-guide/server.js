const express = require('express')
const path = require('path') // Node js Core module
const bodyParser = require('body-parser')

//Adding our custom express.router() here (admin.js)
const adminData = require('./routes/admin')
//Adding our custom express.router() here (shop.js)
const shopRouter = require('./routes/shop')


const app = express()
app.use(bodyParser.urlencoded())

 //Adding filter so the url -starts with /admin/add-product  or /admin/product
 app.use('/admin',adminData.router) //filtering only /admin paths
app.use(shopRouter)

//Adding Template Engine 
app.set('view engine','pug')  //set default Template engine to Use
app.set('views','views')    // Which folder to look for .pug files

//SERVING STATIC FILES CSS
app.use(express.static(path.join(__dirname,'public')))

// Catch all unknow urls=== 404 errors
app.use((req,res,nexr)=>{
    res.status(404)
   // res.sendFile(path.join(__dirname,'views','error.html'))
   res.render('error',{pageTitle:'404 Error'})
})

app.listen(3000, (error) => {
    if (error)
        console.log("Error While Server Starting o Port 3000")
    else
        console.log("Node Server started on port 3000")
})
