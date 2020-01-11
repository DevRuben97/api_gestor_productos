import {Router} from 'express';
const ProductsRoutes= Router();


//Controllers
import {
    ProductList,
    FindById,
    CreateProduct,
    DeleteProduct
} from '../Controllers/ProductController'

ProductsRoutes.get('/Products',ProductList);

ProductsRoutes.get('/Products/:id',FindById);

ProductsRoutes.post('/Products', CreateProduct);

ProductsRoutes.delete('/Products/:id',DeleteProduct);

export default ProductsRoutes;