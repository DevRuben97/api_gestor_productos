import {Router} from 'express';
const ProductsRoutes= Router();


//Controllers
import {
    ProductList,
    FindById,
    CreateProduct,
    EditProduct,
    DeleteProduct,
    products_select
} from '../Controllers/ProductController'

ProductsRoutes.get('/Products',ProductList);

ProductsRoutes.get('/Products/:id',FindById);

ProductsRoutes.post('/Products', CreateProduct);

ProductsRoutes.put('/Products',EditProduct);

ProductsRoutes.delete('/Products/:id',DeleteProduct);

ProductsRoutes.get('/Products/productsForSelect', products_select);

export default ProductsRoutes;