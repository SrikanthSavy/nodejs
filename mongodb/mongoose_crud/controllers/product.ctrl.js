const productModel = require('../models/product.model.js')

//Create Product Controller  and then create a model instance to save data

const productController = {
    create: (req,res)=>{
        if(Object.keys(req.body).length===0)
        {
            return res.status(400).send({
                status: "Error ",
                message: "Request Body is empty"
            })

        }else{
            const product = new productModel(req.body)
            product.save().then(data =>{
                res.status(200)
                res.send({
                    status: "Product created Sucessfully",
                    product: data
                })
            }).catch(error =>{
                res.status(500)
                res.send({
                    status:"Error",
                    message:"Failed to create Product",
                    error:error.message
                })
            })
        }
    },
    //Fetch the All the products from Db  // productModel.find()//
    getProducts: (req,res)=>{
        productModel.find().then(products=>{
            res.status(200)
            res.send({
                status: "Fetching  sucessful!",
                message: "Fetching all Products!",
                products: products
            })
        }).catch(error=>{
            res.status(500)
            res.send({
                status:"Error!",
                message: "Failed to fetch all the Products",
                error: error.message
            })
        })
    },
    // Fetching an single entry 
    getProduct: async (req,res) => {
        console.log(`req.params.id: ${req.params.id}`)
        await productModel.findById(req.params.id).then(product=>{
            res.status(200)
            res.send({
                status: "Single Product fetching!",
                message: "Product Fetched!",
                product: product
            })
        }).catch(error=>{
            res.status(500)
            res.send({
                status:"Error!",
                message: ` Unable to fetch Product with given Id : ${req.params.id}`,
                error: error.message
            })
        })
    },
    //Update a Product using ID
    updateProduct: async (req,res) =>{
        if(!req.body)
        {
            res.status(400)
            res.send({
                message:" Please send Data to update a collection!"
            })
        }
        const id = req.params.id
        console.log(`req.params.id: ${req.params.id}`)

        await productModel.findByIdAndUpdate(id,req.body,{useFindAndModify:false}).then(product=>{
            if(!product)
            {
                res.status(400).send({
                    status:"Error while updating",
                    message: "Product Id not Found"
                })
            }else{
                res.status(200).send({
                    status:`Product updated with ID:${id}!`,
                    message: "Product updated ",
                    product: product
                })
            }

        }).catch(error=>{
            res.status(500).send({
                statu:"Error",
                message:`Error while updated productId: ${id}`,
                error:error.message
            })
        })

    },
    //Delete a specific product based on Id
    deleteProduct: async(req,res)=>{
        const id = req.params.id
       await productModel.findByIdAndDelete(id).then(product=>{ 
            if(!product)
            {
                res.send(404).send({
                    status:"Not found",
                    message:`Product not found with given Id:${id}`
                })
            }else{
                res.send({
                    status:'product Deleted',
                    message:`Product with ProductId: ${id} is Deleted!`
                })
            }
       }).catch(error=>{
            res.status(500).send({
                status:"Error",
                message:`Error while deleting Product`,
                error:error.message
            })
       })
    }
    /*
    deleteProduct: async (req, res) => {
    const id = req.params.id;
    try {
        const product = await productModel.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).send({
                status: "Not found",
                message: `Product not found with given Id: ${id}`
            });
        }
        res.send({
            status: 'Product Deleted',
            message: `Product with ProductId: ${id} is Deleted!`
        });
    } catch (error) {
        res.status(500).send({
            status: "Error",
            message: `Error while deleting Product`,
            error: error.message
        });
    }
}*/
    
}

module.exports=productController