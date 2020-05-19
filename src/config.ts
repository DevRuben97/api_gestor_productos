import express, { Application } from "express";
import cors from 'cors';
import morgan from 'morgan';
import { createConnection } from 'typeorm';
import {config} from 'dotenv';


const SETTING= config();

export function ConfigureServices(app: Application) {

    //Disable default settings:
    app.disable('x-powered-by');
    //Application variables:
    app.set('env',SETTING.parsed?.ENV);
    app.set('config',SETTING.parsed);
    app.set('port', SETTING.parsed?.PORT);

    //Middlewares
    SETTING.parsed?.ENV=== 'Development' && app.use(morgan('dev'));
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