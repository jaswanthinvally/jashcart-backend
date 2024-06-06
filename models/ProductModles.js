const mongoose = require('mongoose') 



const Productschema = new mongoose.Schema({
    name:String,
    price:String,
    discription:String,
    ratings:String,
    images: [
        {
            image:String
        }
    ],
    catagory:String,
    seller:String,
    stock:String,
    noofreview:String,
    createdAt:String,
})

const Productmodel = mongoose.model('products',Productschema)


module.exports = Productmodel