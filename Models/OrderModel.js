const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({

    name:{
        type:String
    },
    price:{
        type:String
    },
    category:{
        type:String
    },
    image:{
        type:String
    },
    uid:{
        type:String
    }
})
const orderModel=mongoose.model("order",orderSchema)
module.exports=orderModel