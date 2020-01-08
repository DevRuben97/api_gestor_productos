import {Router} from 'express';
const ProductsRoutes= Router();


//Controllers
import {
    ProductList,
    FindById
} from '../Controllers/ProductController'

ProductsRoutes.get('/Products',ProductList);

ProductsRoutes.get('/Products/:id',FindById);

export default ProductsRoutes;