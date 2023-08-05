const express=require('express');
const app =express()
app.use(express.static('./navbar'))
app.get('/',(req,res)=>{
    res.status(200).send("This the home page")
})

app.all('*',(req,res)=>{
    res.status(400).send("ooops this page not founding")
})









app.listen(5000,()=>{
    console.log("port 5000 is listning for you")
})