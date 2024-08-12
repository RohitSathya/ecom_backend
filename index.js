const express=require('express')
const cors=require('cors')
const app=express()
const mongoose=require('mongoose')
const router=require('./Routes/Routes')


app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://ecomerce-mern-royo.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use("/product",router)
app.get("/",async(req,res)=>{
    res.json("hi")
})

                           
mongoose.connect("mongodb+srv://admin:sunsetwest1234RRR@royoapi.3qmdrjq.mongodb.net/ecomeerce?retryWrites=true&w=majority").then(()=>{
    console.log('database connected')
  app.listen(8081,()=>console.log('running'))
 
})
