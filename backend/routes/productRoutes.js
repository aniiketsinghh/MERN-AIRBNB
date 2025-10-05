import express from 'express';
const router=express.Router();

import {getAllProducts,createProduct,updateProduct,deleteProduct,getProductById} from '../controllers/productController.js';
router.get('/',getAllProducts);
router.post('/',createProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);
router.get('/:id',getProductById);


export default router;

