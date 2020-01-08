//Modules
import express from 'express';
import morgan from 'morgan';
import ProductsRoutes from './Routes/ProductRoutes'

const app= express();
//Settings
app.set('port',4000);
app.listen(app.get('port'),()=>{
    console.log(`Server Started on port ${app.get('port')}`)
})
//Middlewares
app.use(morgan('dev'));
app.use(express.json());


//routes
app.use(ProductsRoutes)
