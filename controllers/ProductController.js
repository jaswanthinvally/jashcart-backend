
const Productmodel = require('../models/ProductModles')


exports.getproduct = async (req,res,next) => {

    const products = await Productmodel.find({}) 
    res.json({
        sucess:true,
        message:'get products ',
        products
    })

}

exports.getsingleproduct = async (req, res, next) => {
    try {
        const product = await Productmodel.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        res.json({
            success: true,
            message: 'get single product',
            product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

exports.createproduct = (req,res,next) => {
    const {name,price,discription,rating,images,catagory,seller,stock,noofreview,createdAt} = req.body
    Productmodel.create({
        name,
        price,
        discription,
        rating,
        images,
        catagory,
        seller,
        stock,
        noofreview,
        createdAt
    }).then(() => res.json({
         message : "product created sucessfully",
         status : sucess

    })  ).catch(() => res.json({message : "product created failed"}))
}