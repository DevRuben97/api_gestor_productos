import {Router} from 'express';
const ProductsRoutes= Router();


//Controllers
import {
    ProductList,
    FindById,
    CreateProduct,
    EditProduct,
    DeleteProduct
} from '../Controllers/ProductController'

ProductsRoutes.get('/Products',ProductList);

ProductsRoutes.get('/Products/:id',FindById);

ProductsRoutes.post('/Products', CreateProduct);

ProductsRoutes.put('/Products',EditProduct);

ProductsRoutes.delete('/Products/:id',DeleteProduct);

export default ProductsRoutes;