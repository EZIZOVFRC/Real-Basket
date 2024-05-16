import express from 'express';
import 'dotenv/config'

const app = express()
app.use(express.json())
import mongoose, { Schema, connect } from 'mongoose';



app.listen(process.env.PORT,()=>{
    console.log('This app is running bro')
})



const productsSchema = new Schema({
    title: String, 
    image:String,
    price:Number,
    desc:String
    
  });

  const productsModel = mongoose.model('products', productsSchema);



  app.get("/products",async (req,res)=>{
    const product= await productsModel.find()
    res.send(product)
  })
app.get('/products/:id', async(req,res)=>{
    const {id}= req.params;
    const produc=await productsModel.findById(id)
    res.send(produc)
})

app.delete('/products/:id', async(req,res)=>{
    const {id}= req.params;
    const produc=await productsModel.findByIdAndDelete(id)
    res.send(produc)
})

app.put('/products/:id', async (req, res) => {
    
        const { id } = req.params;
        const { title, price, desc, image } = req.body; 
        const product = await productsModel.findByIdAndUpdate(id, { title, price, desc, image })
        res.send('Updated')
        
    
})

  app.post('/products',async(req,res)=>{
    const {title,price,desc,image}=req.body;
    let newProduct= new productsModel({title,price,desc,image})
    await newProduct.save()
    res.send('elave olundu')
  })
connect(process.env.MY_KEY)
  .then(() => console.log('Connected Bro!')).catch(err=>console.log('YO BRO QOSULMADI'))