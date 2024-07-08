const mongoose = require('mongoose')

//create a schema for Products
const  productSchema = mongoose.Schema({
    name:{type: String},
    imgScr:{type: String},
    price:{type:Number},
    specification:{type:Array}
})


//Create a Model for ProductSchema and Collection in DB "Products"
const productModel = mongoose.model('products',productSchema)

module.exports=productModel