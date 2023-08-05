const http=require('http')
const fs=require('fs');
const homepage=fs.readFileSync('navbar/index.html')
const homestyle=fs.readFileSync('navbar/style.css')
const homelogic=fs.readFileSync('navbar/logic.js')
const homelogo=fs.readFileSync('navbar/logo.svg')
const server=http.createServer((req,res)=>{
    url=req.url
    console.log(url)
    //############################APloid navbar design##################################""
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage) 
        res.end();
    }
    else if(req.url==='/style.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homestyle) 
        res.end();;    
    }
    else if(req.url==='/logic.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homelogic) 
        res.end();;    
    }
    else if(req.url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homelogo) 
        res.end();;    
    }

   

 //############################ display navbar links##################################
 else if(url==='/index.html'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>home page</h1>') 
    res.end();
}
else if(url==='/about.html'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>About page</h1>') 
    res.end();
}
else if(url==='/projects.html'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>projects page</h1>') 
    res.end();
}
else if(url==='/contact.html'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>contact page</h1>') 
    res.end();
}
else{
    res.writeHead(404,{'content-type':'text/html'})
     res.end(`<h1>Opps your loking for an existing page</h1><a href='/'> back to</a>`)}
    
})
server.listen("5000")