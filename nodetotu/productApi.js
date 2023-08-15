const express=require('express');
const app=express();
app.use(express.static('./navbar'))
const {products}=require('./data')/// on faut destrcting of the object
app.get('/',(req,res)=>{
})
//get all the product
app.get('/products.html',(req,res)=>{
    const newproduct=products.map((product)=>{
       const {id,name,image}=product//for choose just the data we want
       return {id,name,image}
    })
    res.json(newproduct)
})
//get all the products one by one
app.get('/products.html/:productId',(req,res)=>{
 const {productId}=req.params
//  const newproduct= products.find((product)=>{
//       product.id===Number(productId)
//       return   product.id })
//############# if we put the curlly pracete witha callback function we need to add return statment
const newproduct= products.find((product)=>product.id===Number(productId))
if (!newproduct){
    res.status(404).send("not found page")
}
   return res.json(newproduct)
})
//complexe content for routing 
app.get('/products.html/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
  })
  //query string parametre its when we provide an url like that http://localhost:5000/products.html/1/reviews/1?sereach=%22john%22

  app.get('/api/v1/query',(req,res)=>{
    const {search,limite}=req.query//we passe the query in a string and than we do fonctionality based on this 
    let sortedProducts = [...products]
    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })}
    if(limite){
        sortedProducts=sortedProducts.slice(0,Number(limite))
    }
    if(sortedProducts.length<1){
        res.status(200).json({ sucess: true, data: [] })
    }
  
    
    return res.status(200).json(sortedProducts)
})





app.listen(5000,()=>{console.log('the server is running in port 5000 ......')})
