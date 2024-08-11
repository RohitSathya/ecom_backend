const mongoose=require('mongoose')

const addressSchema=mongoose.Schema({

    country:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    landmark:{
        type:String,
        required:true
    },
    uid:{
        type:String,
    }
})

const addressmodel=mongoose.model('address',addressSchema)
module.exports=addressmodel