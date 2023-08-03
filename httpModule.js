const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end(`<h1>WELCOME FROM THE SERVER 5000 TO THE HOME PAGE</h1>`);
    }
    else if(req.url==='/About'){
        res.end(`<h1>WELCOME FROM THE SERVER 5000 TO THE ABOUT PAGE</h1>`);    
    }
   else{ res.end(`<h1>Opps your loking for an existing page</h1><a href='/'> back to</a>`)}
    
})
server.listen("5000")
