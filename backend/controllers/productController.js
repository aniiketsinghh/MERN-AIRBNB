import Product from '../Schemas/Product.js';

export const getAllProducts=async(req,res)=>{
    try{
        const products=await Product.find({});
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

export const getProductById=async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

export const createProduct=async(req,res)=>{
    try{
        const product=new Product(req.body);
        let savedProduct=await product.save();
        res.status(201).json(savedProduct);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

export const updateProduct=async(req,res)=>{
    try{  
        console.log(req.body);
        const updateProduct=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(updateProduct);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

export const deleteProduct=async(req,res)=>{
    try{
        const deletedProduct=await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedProduct);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }

}