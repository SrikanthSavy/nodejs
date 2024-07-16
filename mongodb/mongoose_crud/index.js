//import packages
const express = require('express')
const mongoose= require('mongoose')
//include the productController
const productController = require('./controllers/product.ctrl')

const app = express()

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200)
    res.send(`Welcome to Node Mongda Crud Application!`)
})

//Create a Product Url
app.post('/product',productController.create)
//Fetching all the Products list
app.get("/allproducts",productController.getProducts)
//Fetching a Single Product
app.get("/product/:id",productController.getProduct)
//Updating a product
app.put('/product/:id',productController.updateProduct)
//Delete a product
app.delete('/product/:id',productController.deleteProduct)

//Mongo DB Connection
const mongoDbConnection = async ()=>{
    try{
        await  mongoose.connect('mongodb://localhost:27017/ecommerce')
        console.log("Connected to MongoDB Sucessfully")
    }catch(error){
        console.log("DB-Connection Error........")
    }    
}

mongoDbConnection()

app.listen(3000,(error)=>{

    console.log("Server started on Port : 3000")
})


///https://medium.com/techvblogs/build-crud-api-with-node-js-express-and-mongodb-e3aa58da3915
