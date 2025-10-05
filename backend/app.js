import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/mongodb.js'
import productRoutes from './routes/productRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products',productRoutes);

connectDB().then(()=>{
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
}).catch((err)=>{
    console.log(err.message);
})

