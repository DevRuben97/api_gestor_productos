//Modules
import express, { NextFunction,Request, Response } from 'express';
import morgan from 'morgan';
import 'reflect-metadata';
import {createConnection} from 'typeorm'
import cors from 'cors';

//Routes
import ProductsRoutes from './Routes/ProductRoutes'
import AuthRoutes from './Routes/AuthRoutes';

const app= express();
//Settings
app.set('port',4000);
app.listen(app.get('port'),()=>{
    console.log(`Server Started on port ${app.get('port')}`)
})
//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//CORS CONFIGURATION
app.use(cors());


//Routes
app.use(ProductsRoutes);
app.use(AuthRoutes);


//Create database connectionL

createConnection().then(connnection=>{


    if (connnection.isConnected){
        console.log(`The connection to the database is established`);
        
    }

})
.catch(error=> console.log(error));
