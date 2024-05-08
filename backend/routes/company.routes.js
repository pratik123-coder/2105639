
import express from 'express';

import { getProductDetails, getTopProducts } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/companies/:companyname/categories/:categoryname/products', getTopProducts);
router.get('/companies/:companyname/categories/:categoryname/products/:productid', getProductDetails);

export default router;