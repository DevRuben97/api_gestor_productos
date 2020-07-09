import {Router} from 'express';

//Controllers
import {
    ProductList,
    FindById,
    CreateProduct,
    EditProduct,
    DeleteProduct,
    products_select,
    total_products,
    total_warehouse
} from '../Controllers/ProductController'

const ProductRoutes={
    source: '/Products',
    router: Router()
}

ProductRoutes.router.get('/',ProductList);

ProductRoutes.router.get('/:id',FindById);

ProductRoutes.router.post('/', CreateProduct);

ProductRoutes.router.put('/',EditProduct);

ProductRoutes.router.delete('/:id',DeleteProduct);

ProductRoutes.router.get('/ForSelect/:0', products_select);

ProductRoutes.router.get('/ProductsCount/:0',total_products);

ProductRoutes.router.get('/TotaltotalWarehouse/:0',total_warehouse);

export default ProductRoutes;