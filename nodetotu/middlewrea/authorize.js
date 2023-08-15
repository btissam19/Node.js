const express = require('express')
const app = express()

const authorize=(req,res,next)=>{
    const {user}=req.query
    if(user==='john'){
        req.user={name:'json',id:3}
        next()
    }
    else{
        res.status(401).send('unauthorise')
    }

}
module.exports={authorize}