const cartmodel=require('../Models/CartModel')
const addressmodel=require('../Models/Addressmodel')
const usermodel=require('../Models/Usermodel')
const ordermodel=require('../Models/OrderModel')

const register=async(req,res)=>{
  const {email}=req.body
  const findexists=await usermodel.find({email})
  if(findexists==''){
    const data=await usermodel.create(req.body)
    res.json({userdetail:data})

  }
  else{
    res.json({message:'failed'})

  }
 
 
}

const login=async(req,res)=>{
  const {email,password}=req.body
  const data=await usermodel.findOne({email,password})
  if(data=='' || !data){
    res.json({message:'failed'})
  
  }
  else{
    res.json({userdetail:data})
    
  }

  

  
}


















const createcart=async(req,res)=>{
         
      const {name}=req.body
      const {uid}=req.body
      const findid=await cartmodel.find({uid,name})
      if(findid==''){
        const data=await cartmodel.create(req.body)
        res.json(data)
       
      }
      else{
        res.json({message:'f'})
       
      }
  
       

}


const getcart=async(req,res)=>{

  const id=req.params.id
  const sid=String(id)

    const data=await cartmodel.find({
       uid:sid
    })
    if(!data || data==''){
      res.json({message:'f'})
    }
    else{
      res.json(data)
   
    }
   
}

const deletecart=async(req,res)=>{
   const id=req.params.id
   const pid=req.params.pid
   const findproduct=await cartmodel.find({
     uid:id
   })
   if(findproduct){
    const data=await cartmodel.findByIdAndDelete({_id:pid})
    res.json({message:'s'})
    console.log('df')
   }


}

const address=async(req,res)=>{

  const data=await addressmodel.create(req.body)
  res.json({addressdata:data,message:'s'})

}

const getaddress=async(req,res)=>{
  const id=req.params.id
  const data=await addressmodel.findOne({uid:id})
  if(!data){
    res.json({message:'f'})
  }
  else{
    res.json({message:'s',addressofuid:data})
  }


}
const updateaddress=async(req,res)=>{
  const id=req.params.id
  const name=req.params.name
  const phone=req.params.phoneno
  const area=req.params.area
  const pincode=req.params.pincode
  const landmark=req.params.landmark
  const datar=await addressmodel.findOneAndUpdate({uid:id},{
    name:name,phoneno:phone,area:area,landmark:landmark,pincode:pincode
  })
  res.json(datar)
  console.log(datar)
}
const cartafterorder=async(req,res)=>{
  const id=req.params.id
  const dcart=await cartmodel.deleteMany({uid:id})
  res.json({message:'s'})

 


}
const createorder=async(req,res)=>{
  
  const{ord}=req.body
   let co=0
  for (let x of ord){
    delete ord[co]._id
    delete ord[co].createdAt
    delete ord[co].updatedAt
    delete ord[co].__v
     const data=await ordermodel.create(ord[co])
     co+=1
  }

}
const getorder=async(req,res)=>{
  const id=req.params.id
  const data=await ordermodel.find({uid:id})
  if(data=='' || !data){
    res.json({message:'f'})
  }
  else{ 
    res.json(data)

  }


}
const deleteorder=async(req,res)=>{
  const id=req.params.id
  const pid=req.params.pid
  const findord=await ordermodel.find({uid:id})
  if(findord){
    const delord=await ordermodel.findByIdAndDelete({_id:pid})
    res.json({messsage:'s'})
  }

}


module.exports={register,login,createcart,getcart,deletecart,address,getaddress,updateaddress,cartafterorder,createorder,getorder,deleteorder}