const express=require('express')
const cors=require('cors')
const app=express()
const mongoose=require('mongoose')
const router=require('./Routes/Routes')


app.use(express.json())
app.use(cors())

app.use("/product",router)
app.get("/",async(req,res)=>{
    res.json("hi")
})

                           
mongoose.connect("mongodb+srv://admin:sunsetwest1234RRR@royoapi.3qmdrjq.mongodb.net/ecomeerce?retryWrites=true&w=majority").then(()=>{
    console.log('database connected')
  app.listen(8081,()=>console.log('running'))
 
})
