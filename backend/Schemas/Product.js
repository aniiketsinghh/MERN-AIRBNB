import mongoose from 'mongoose';

const ProductSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,
        default:"https://unsplash.com/photos/three-brown-wooden-boat-on-blue-lake-water-taken-at-daytime-T7K4aEPoGGk",
        set:(v)=> v === "" ? "https://unsplash.com/photos/three-brown-wooden-boat-on-blue-lake-water-taken-at-daytime-T7K4aEPoGGk"
        : v},
    price:{type:Number,required:true},
    location:{type:String},
    country:{type:String},

},{timestamps:true});

const Product = mongoose.model('Product', ProductSchema);
export default Product;