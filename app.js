const express=require('express')
const app=express()

const cors=require('cors')
const mongoose=require('mongoose')

app.use(cors())

//database Connection Before Routing
let URL='mongodb+srv://mst123:mst123@cluster0.k0k62.mongodb.net/Vegetables';
let OPTION={user:'mst123',pass:'mst123',autoIndex:true};

mongoose.connect(URL,OPTION).then((res)=>{
    console.log('Vegetables Database conneted successfully')
}).catch((err)=>{
    console.log(err)
})

let projectSchema= mongoose.Schema({
        VegeName:{type:String,required:true},
        VegeImage:{type:String,required:true},
        VegePrice:{type:String},
})

let VegetablesModel=mongoose.model('vegetables',projectSchema)

let userSchema = mongoose.Schema({
    fullName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
})


app.get('/api/getVegetables',async(req,res)=>{
    try{
        let data= await VegetablesModel.find()
        res.status(200).json({status:'success',data:data})
    }catch(e){
        res.status(200).json({status:'failed',err:toString(e)})
    }
})


module.exports=app