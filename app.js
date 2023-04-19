let express= require('express')
let cors=require('cors')
let jwt=require('jsonwebtoken')
let app=express()
app.use(cors())
app.listen(3000,()=>console.log("server started"))
app.post('/login',(req,res)=>{
    const user={
        username:"cvr",
        password:"cse"
    }
    jwt.sign({user},"secret key",(err,token)=>{
           if(!err){
           res.json({token})
           }else{
           console.log(err)
           }
        })
    
})
app.post('/profile',accessToken,(req,res)=>{
    jwt.verify(req.token,"secret key",(err,data)=>{
        if(!err){
            res.json({message:"profile end point"})
        }
        else{
            res.json({message:"invalid token"})
        }
    })
})
function accessToken(req,res,next){
    let bearerHeader=req.headers['authorization'];
    if(typeof bearerHeader!='undefined'){
        let bearerToken=bearerHeader.split(" ")[1]
        console.log(bearerToken);
        req.token=bearerToken;
        next();
    }else{
        res.json({message:"no header exists"})
    }
}
