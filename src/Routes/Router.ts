import MovementsRoutes from './MovementsRoutes'
import AuthRoutes from './AuthRoutes';
import ProductRoutes from './ProductRoutes';
import { Application } from 'express'


export default function configureRouter(app: Application){
    
    app.use('/Movement',MovementsRoutes);
    app.use('/Auth',AuthRoutes);
    app.use(ProductRoutes.source, ProductRoutes.router);
}