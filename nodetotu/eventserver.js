const http=require('http');
server=http.createServer()
server.on("request",(req,res)=>{
    res.end("welcome form the home page")
})
server.listen(5000,()=>{
    console.log("the server is listing in port 5000")
})
