import express, { Application, Express } from "express";
import cors from 'cors';
import morgan from 'morgan';
import { createConnection } from 'typeorm';

export function ConfigureServices(app: Application) {

    //Middlewares
    app.use(morgan('dev'));
    app.use(express.json());

    //CORS CONFIGURATION
    app.use(cors());
}

export function configureDatabase() {
    createConnection().then(connnection => {


        if (connnection.isConnected) {
            console.log(`The connection to the database is established`);

        }

    })
        .catch(error => console.log(error));
}